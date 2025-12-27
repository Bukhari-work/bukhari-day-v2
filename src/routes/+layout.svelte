<script lang="ts">
	import "../app.css";
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import favicon from "$lib/assets/favicon.svg";

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="relative flex min-h-screen min-w-screen flex-col overflow-x-clip">
	<Header />

	<main class="flex-1">
		{@render children()}
	</main>

	<Footer />
</div>
