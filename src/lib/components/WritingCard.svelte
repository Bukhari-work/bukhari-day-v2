<script lang="ts">
	import type { Writing } from "$lib/types";
	import { Badge } from "$lib/components/ui/badge";

	let { writing }: { writing: Writing } = $props();

	const href = $derived(`/writings/${writing.slug}`);

	const formattedDate = $derived.by(() => {
		const d = new Date(writing.date);
		if (Number.isNaN(d.getTime())) return writing.date;

		return d.toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
			year: "numeric",
		});
	});

	const visibleTags = $derived((writing.tags ?? []).slice(0, 1));
	const extraTagCount = $derived((writing.tags?.length ?? 0) - visibleTags.length);
</script>

<a
	{href}
	aria-label={`Read: ${writing.title}`}
	class="group bg-card hover:bg-accent/40 hover:border-primary focus-visible:ring-ring block overflow-hidden rounded-2xl border shadow-sm transition focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-inset"
>
	<div class="grid gap-0 sm:grid-cols-[190px_1fr]">
		<div class="flex min-w-0 space-x-2 px-5 pt-5 sm:inline sm:space-y-2 sm:border-r sm:py-5">
			<time datetime={writing.date} class="text-muted-foreground block font-mono text-xs">
				{formattedDate}
			</time>

			{#if (writing.tags?.length ?? 0) > 0}
				<div class="flex flex-wrap gap-1.5">
					{#each visibleTags as tag}
						<Badge variant="secondary" class="font-mono text-xs leading-none">
							#{tag}
						</Badge>
					{/each}

					{#if extraTagCount > 0}
						<Badge
							variant="outline"
							class="text-muted-foreground/80 font-mono text-[11px] leading-none"
						>
							+{extraTagCount}
						</Badge>
					{/if}
				</div>
			{/if}
		</div>

		<div class="min-w-0 px-5 pt-2 pb-5 sm:pt-5">
			<h3
				class="group-hover:text-primary line-clamp-2 text-xl font-semibold tracking-tight transition-colors"
			>
				{writing.title}
			</h3>

			{#if writing.description}
				<p class="text-muted-foreground mt-2 line-clamp-2 text-sm leading-relaxed">
					{writing.description}
				</p>
			{/if}
		</div>
	</div>
</a>
