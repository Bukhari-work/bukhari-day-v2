<script lang="ts">
	import type { Writing } from "$lib/types";

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
</script>

<a
	{href}
	aria-label={`Read: ${writing.title}`}
	class="group bg-card hover:bg-accent/40 hover:border-accent-foreground/50 focus-visible:ring-ring focus-visible:ring-offset-background relative block rounded-xl
		border p-6
		shadow-sm transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
>
	<div class="grid gap-2 sm:grid-cols-[140px_1fr] sm:items-start">
		<!-- meta column -->
		<time datetime={writing.date} class="text-muted-foreground block font-mono text-xs">
			{formattedDate}
		</time>

		<!-- content column -->
		<div class="min-w-0 space-y-2">
			<h3
				class="group-hover:text-primary text-lg font-semibold tracking-tight transition-colors"
			>
				{writing.title}
			</h3>

			{#if writing.description}
				<p class="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
					{writing.description}
				</p>
			{/if}
		</div>
	</div>

	<!-- subtle affordance (optional but nice) -->
	<span
		aria-hidden="true"
		class="text-muted-foreground/60 group-hover:text-muted-foreground pointer-events-none absolute top-5 right-5
			transition group-hover:translate-x-0.5"
	>
		↗
	</span>
</a>
