<script lang="ts">
	import "../app.css";
	import { ModeWatcher } from "mode-watcher";
	import { onNavigate } from "$app/navigation";
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import GridPattern from "$lib/components/GridPattern.svelte";
	import favicon from "$lib/assets/favicon.svg";

	let { children } = $props();

	// Enable View Transitions API for SvelteKit navigation
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<ModeWatcher />

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<GridPattern />

<div class="relative flex min-h-screen flex-col">
	<Header />

	<main class="flex-1">
		{@render children()}
	</main>

	<Footer />
</div>
