<script lang="ts">
	import { page } from "$app/stores";
	import { Button } from "$lib/components/ui/button";
	import { Menu, X } from "@lucide/svelte";

	// Svelte 5 Runes for state
	let isMenuOpen = $state(false);

	const navItems = [
		{ href: "/about", label: "About" },
		{ href: "/projects", label: "Projects" },
		{ href: "/writings", label: "Writings" },
	];

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<header
	class="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full font-mono backdrop-blur"
>
	<div class="container flex h-14 max-w-screen-2xl items-center justify-between">
		<a href="/" class="mr-6 flex items-center space-x-2 font-bold">
			<span class="text-xl tracking-tight">YourName.</span>
		</a>

		<nav class="hidden items-center gap-8 text-sm md:flex">
			{#each navItems as item}
				<a
					href={item.href}
					class="transition-all duration-300 hover:font-bold
                    {$page.url.pathname === item.href ? 'font-semi-bold' : 'text-foreground/60'}"
				>
					{item.label}
				</a>
			{/each}
			<Button variant="outline" size="sm" href="/resume">Resume ↓</Button>
		</nav>

		<!-- <div class="hidden items-center gap-2 md:flex">
			<Button variant="outline" size="sm" href="/resume.pdf" download>Resume ↓</Button>
		</div> -->

		<button
			class="text-foreground/50 hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-md p-2 md:hidden"
			onclick={toggleMenu}
			aria-label="Toggle menu"
		>
			<Menu class={isMenuOpen ? "hidden" : "block"} />
			<X class={isMenuOpen ? "block" : "hidden"} />
		</button>
	</div>

	{#if isMenuOpen}
		<div class="bg-background border-b md:hidden">
			<div class="container space-y-4 py-4">
				{#each navItems as item}
					<a
						href={item.href}
						class="hover:text-primary block text-sm font-medium transition-colors"
						onclick={() => (isMenuOpen = false)}
					>
						{item.label}
					</a>
				{/each}
				<div class="pt-2">
					<Button class="w-full" variant="outline" href="/resume">Resume</Button>
				</div>
			</div>
		</div>
	{/if}
</header>
