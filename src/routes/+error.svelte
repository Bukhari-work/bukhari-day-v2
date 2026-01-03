<script lang="ts">
	import { page } from "$app/stores";
	import { Button } from "$lib/components/ui/button";
</script>

<svelte:head>
	<title>Page Not Found | Your Name</title>
</svelte:head>

<div class="flex h-[60dvh] flex-col items-center justify-center space-y-6 text-center">
	<div class="space-y-2">
		<h1 class="text-primary text-7xl font-extrabold tracking-tighter">404</h1>
		<h2 class="text-2xl font-bold tracking-tight">Page not found</h2>
	</div>

	<p class="text-muted-foreground max-w-xl">
		Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or
		maybe you just mistyped the URL.
	</p>

	<div class="flex gap-4">
		<Button href="/" size="lg">Go Home</Button>
		<Button variant="outline" size="lg" onclick={() => history.back()}>Go Back</Button>
	</div>

	<div class="text-muted-foreground bg-muted mt-12 rounded p-2 font-mono text-xs">
		Status: {$page.status} | Path: {$page.url.pathname}
	</div>
</div>
