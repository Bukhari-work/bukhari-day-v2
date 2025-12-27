<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
</svelte:head>

<article class="container max-w-3xl py-10">
	<header class="mb-10 text-center">
		<div class="text-muted-foreground mb-2 text-sm">
			{new Date(data.meta.date).toLocaleDateString()}
		</div>
		<h1 class="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
			{data.meta.title}
		</h1>
		{#if data.meta.tags}
			<div class="flex justify-center gap-2">
				{#each data.meta.tags as tag}
					<span class="bg-secondary text-secondary-foreground rounded px-2 py-1 text-xs">
						#{tag}
					</span>
				{/each}
			</div>
		{/if}
	</header>

	<div class="prose dark:prose-invert mx-auto">
		<data.content />
	</div>
</article>
