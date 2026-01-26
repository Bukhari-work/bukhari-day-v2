<script lang="ts">
	import { page } from "$app/state";
	import { afterNavigate } from "$app/navigation";
	import { Button } from "$lib/components/ui/button";
	import { Menu, X } from "@lucide/svelte";
	import { fade, slide } from "svelte/transition";
	import { goto } from "$app/navigation";

	let isMenuOpen = $state(false);

	const navItems = [
		{ href: "/about", label: "About" },
		{ href: "/projects", label: "Projects" },
		{ href: "/writings", label: "Writings" },
	];

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}

	afterNavigate(() => {
		isMenuOpen = false;
	});

	// Lock body scroll when menu is open
	$effect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	});

	async function handleMobileNav(e: MouseEvent, url: string) {
		e.preventDefault();
		isMenuOpen = false;
		await new Promise((resolve) => setTimeout(resolve, 220)); // Wait for the 'out:slide' (220ms) to finish cleanly
		goto(url);
	}

	function handleLogoClick(e: MouseEvent) {
		if (isMenuOpen) {
			handleMobileNav(e, "/");
		}
	}
</script>

<header
	class="site-header sticky top-0 z-50 w-full font-mono backdrop-blur transition-colors duration-300
    {isMenuOpen ? 'bg-background' : 'bg-background/80 supports-backdrop-filter:bg-background/60'}"
>
	<div class="container flex h-14 items-center justify-between">
		<!-- Brand -->
		<a
			href="/"
			class="group flex items-center gap-2 font-mono font-bold"
			onclick={handleLogoClick}
		>
			<span
				class="text-xl tracking-tight transition-transform duration-300 ease-in-out group-hover:scale-105"
			>
				Bukhari.Day
			</span>
		</a>

		<!-- Desktop Nav -->
		<nav class="hidden items-center gap-8 text-sm md:flex">
			{#each navItems as item (item.href)}
				<a
					href={item.href}
					class="transition-all duration-300 hover:font-bold
                    {page.url.pathname === item.href ? 'font-semi-bold' : 'text-foreground/60'}"
				>
					{item.label}
				</a>
			{/each}
			<Button size="sm" href="/resume">Resume</Button>
		</nav>

		<!-- Mobile Toggle -->
		<button
			class="text-foreground/70 hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-md p-2 transition md:hidden"
			onclick={toggleMenu}
			aria-label="Toggle menu"
			aria-expanded={isMenuOpen}
			aria-controls="mobile-menu"
		>
			<Menu class={isMenuOpen ? "hidden" : "block"} />
			<X class={isMenuOpen ? "block" : "hidden"} />
		</button>
	</div>

	<!-- Mobile Menu -->
	{#if isMenuOpen}
		<div
			class="fixed inset-0 top-14 z-40 h-screen bg-black/60"
			transition:fade={{ duration: 150 }}
			onclick={closeMenu}
			aria-hidden="true"
		></div>

		<div
			class="bg-background absolute inset-x-0 top-full z-50 border-b md:hidden"
			in:slide={{ duration: 250 }}
			out:slide={{ duration: 220 }}
			role="dialog"
			aria-modal="true"
		>
			<div class="container flex flex-col gap-7 pt-2 pb-6 text-center">
				{#each navItems as item (item.href)}
					<a
						href={item.href}
						class="text-base font-medium tracking-wide transition-colors
                        {page.url.pathname === item.href
							? 'text-primary'
							: 'text-foreground/70 hover:text-foreground'}"
						onclick={(e) => handleMobileNav(e, item.href)}
					>
						{item.label}
					</a>
				{/each}
				<div class="pt-2">
					<Button
						class="w-full"
						href="/resume"
						onclick={(e) => handleMobileNav(e, "/resume")}>Resume</Button
					>
				</div>
			</div>
		</div>
	{/if}
</header>
