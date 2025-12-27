<script lang="ts">
    import type { Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";
    import { tick } from "svelte";
    import { browser } from "$app/environment";

    type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

    interface Props extends HTMLAttributes<HTMLHeadingElement> {
        level?: HeadingLevel;
        children: Snippet;
        class?: string;
        id?: string;

        /** Scope for checking duplicate IDs (defaults to document). */
        dedupeScope?: HTMLElement | Document;

        /** Smooth scroll to the heading on click. */
        smoothScroll?: boolean;

        /** Show a temporary "copied" state in the UI. */
        showCopiedState?: boolean;

        /** Use pushState instead of replaceState (defaults to replaceState to keep Back clean). */
        historyMode?: "replace" | "push";

        /**
         * If true, re-run auto-id generation when text changes.
         * Default false because changing IDs breaks deep links.
         */
        regenerateOnTextChange?: boolean;
    }

    let {
        level = "h2",
        children,
        class: className = "",
        id: providedId,
        dedupeScope,
        smoothScroll = true,
        showCopiedState = true,
        historyMode = "replace",
        regenerateOnTextChange = false,
        ...rest
    }: Props = $props();

    let headingEl: HTMLHeadingElement | undefined = $state();
    let id = $state(providedId ?? "");
    let copied = $state(false);

    // Track whether we've generated an id already (avoid re-generating and breaking deep links)
    let didGenerate = $state(false);

    const slugify = (text: string) =>
        text
            .normalize("NFKD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "")
            .replace(/--+/g, "-")
            .replace(/^-+|-+$/g, "");

    function ensureUniqueId(base: string) {
        if (!base || !browser) return base;

        const root = dedupeScope ?? document;

        let candidate = base;
        for (let i = 2; i < 1000; i++) {
            const found = root.getElementById(candidate);
            if (!found || found === headingEl) return candidate;
            candidate = `${base}-${i}`;
        }
        return `${base}-999`;
    }

    function getHeadingText() {
        // Only slugify the content, not the permalink UI
        const content = headingEl?.querySelector(
            "[data-anchor-text]",
        ) as HTMLElement | null;
        return (content?.textContent ?? "").trim();
    }

    async function copyText(text: string) {
        if (!browser) return false;

        // Modern API
        if (navigator.clipboard?.writeText) {
            try {
                await navigator.clipboard.writeText(text);
                return true;
            } catch {
                // fall through
            }
        }

        // Legacy fallback
        try {
            const ta = document.createElement("textarea");
            ta.value = text;
            ta.style.position = "fixed";
            ta.style.top = "0";
            ta.style.left = "0";
            ta.style.opacity = "0";
            ta.setAttribute("readonly", "true");
            document.body.appendChild(ta);
            ta.focus();
            ta.select();
            const ok = document.execCommand("copy");
            document.body.removeChild(ta);
            return ok;
        } catch {
            return false;
        }
    }

    // ID generation
    $effect(() => {
        // Keep in sync if user provides an id
        if (providedId) {
            id = providedId;
            didGenerate = true;
            return;
        }

        if (!browser || !headingEl) return;

        // If we already generated an id, don't change it unless explicitly allowed
        if (didGenerate && !regenerateOnTextChange) return;

        (async () => {
            // Ensure children have rendered
            await tick();

            // Reference children so updates can re-run when desired
            children;

            const text = getHeadingText();
            if (!text) return;

            const base = slugify(text);
            const unique = ensureUniqueId(base);

            if (unique) {
                id = unique;
                didGenerate = true;
            }
        })();
    });

    // copied-state timer with cleanup
    $effect(() => {
        let t: ReturnType<typeof setTimeout> | undefined;

        if (copied) {
            t = setTimeout(() => (copied = false), 1500);
        }

        return () => {
            if (t) clearTimeout(t);
        };
    });

    const onPermalinkClick = async (e: MouseEvent) => {
        if (!id || !browser) return;

        // Let users use modifier clicks / middle click normally
        const isPlainLeftClick =
            e.button === 0 &&
            !e.metaKey &&
            !e.ctrlKey &&
            !e.shiftKey &&
            !e.altKey;

        if (!isPlainLeftClick) return;

        e.preventDefault();

        const url = new URL(window.location.href);
        url.hash = id;

        if (historyMode === "push") history.pushState(null, "", url.toString());
        else history.replaceState(null, "", url.toString());

        // Optional: scroll
        headingEl?.scrollIntoView({
            behavior: smoothScroll ? "smooth" : "auto",
            block: "start",
        });

        const ok = await copyText(url.toString());
        if (showCopiedState && ok) copied = true;
    };
</script>

<svelte:element
    this={level}
    bind:this={headingEl}
    id={id || undefined}
    class="group relative scroll-mt-20 {className}"
    {...rest}
>
    <a
        href={id ? `#${id}` : undefined}
        onclick={onPermalinkClick}
        class="text-accent absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 transition-opacity hover:opacity-100 focus-visible:opacity-100 group-hover:opacity-50"
        aria-label={copied ? "Link copied" : "Copy link to this section"}
    >
        {#if copied}
            <span aria-hidden="true">✓</span>
        {:else}
            <span aria-hidden="true" class="text-lg font-bold">#</span>
        {/if}
    </a>

    <span data-anchor-text>
        {@render children()}
    </span>
</svelte:element>
