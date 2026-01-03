<script lang="ts">
	import WritingCard from "$lib/components/WritingCard.svelte";

	// Receive the data from +page.server.ts
	let { data } = $props();
</script>

<svelte:head>
	<title>Writings | Your Name</title>
	<meta name="description" content="Thoughts on software engineering, design, and SvelteKit." />
</svelte:head>

<div class="container max-w-3xl py-12">
	<header class="mb-12 space-y-4">
		<h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl">Writings</h1>
		<p class="text-muted-foreground text-xl">
			Notes on development, tutorials, and things I've learned along the way.
		</p>
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
