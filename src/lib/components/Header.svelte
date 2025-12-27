<script lang="ts">
	import { page } from "$app/stores";
	import { Button } from "$lib/components/ui/button";

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
	class="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b font-mono backdrop-blur"
>
	<div class="container flex h-14 max-w-screen-2xl items-center justify-between">
		<a href="/" class="mr-6 flex items-center space-x-2 font-bold">
			<span class="text-xl tracking-tight">YourName.</span>
		</a>

		<nav class="hidden items-center gap-6 text-sm md:flex">
			{#each navItems as item}
				<a
					href={item.href}
					class="transition-all duration-300 hover:font-bold
                    {$page.url.pathname === item.href ? 'font-semi-bold' : 'text-foreground/60'}"
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<div class="hidden items-center gap-2 md:flex">
			<Button variant="outline" size="sm" href="/resume.pdf" download>Resume ↓</Button>
		</div>

		<button
			class="text-foreground/50 hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-md p-2 md:hidden"
			onclick={toggleMenu}
			aria-label="Toggle menu"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class={isMenuOpen ? "hidden" : "block"}
			>
				<line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line
					x1="4"
					x2="20"
					y1="18"
					y2="18"
				/>
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class={isMenuOpen ? "block" : "hidden"}
			>
				<path d="M18 6 6 18" /><path d="m6 6 12 12" />
			</svg>
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
					<Button class="w-full" variant="outline" href="/resume.pdf" download
						>Download Resume</Button
					>
				</div>
			</div>
		</div>
	{/if}
</header>
