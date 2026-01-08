<script lang="ts">
	import type { PageData } from "./$types";
	import SEO from "$lib/components/SEO.svelte";
	import WritingCard from "$lib/components/WritingCard.svelte";

	let { data }: { data: PageData } = $props();
</script>

<SEO title="Writings" description="Articles on things I am interested in." />

<div class="container py-12 xl:max-w-5xl">
	<header class="mb-12 max-w-prose space-y-4">
		<h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl">Writings</h1>
		<p class="text-muted-foreground text-xl">Notes things I've learned along the way.</p>
	</header>

	{#if data.writings.length > 0}
		<div class="grid gap-6">
			{#each data.writings as writing}
				<WritingCard {writing} />
			{/each}
		</div>
	{:else}
		<div class="text-muted-foreground rounded-lg border border-dashed p-12 text-center">
			<p>No writings found. Check back later!</p>
		</div>
	{/if}
</div>
