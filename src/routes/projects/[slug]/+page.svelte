<script lang="ts">
	import SEO from "$lib/components/SEO.svelte";
	import { Badge } from "$lib/components/ui/badge";
	import { Button } from "$lib/components/ui/button";
	import { Separator } from "$lib/components/ui/separator";
	import { ArrowLeft, ExternalLink, Calendar, Briefcase, Check } from "@lucide/svelte";

	let { data } = $props();
	let { meta } = $derived(data);

	const highlights = $derived(meta?.highlights ?? []);
	const tech = $derived(meta?.tech ?? []);
	const link = $derived(meta?.link);

	const thumbnail = $derived.by(() => {
		const t = meta?.thumbnail?.trim();
		if (!t) return null;
		return t.startsWith("/") ? t : `/${t}`;
	});
</script>

<SEO title={data.meta.title} description={data.meta.description} type="article" />

<article class="container py-12 lg:max-w-4xl">
	<nav class="mb-8 hidden md:block">
		<Button
			variant="ghost"
			href="/projects"
			class="text-muted-foreground hover:text-foreground hover:bg-background -ml-4 gap-2 pl-4 transition-colors"
		>
			<ArrowLeft class="h-4 w-4" />
			Back to Projects
		</Button>
	</nav>

	{#if thumbnail}
		<div class="bg-muted mb-10 overflow-hidden rounded-2xl border shadow-sm lg:mb-12">
			<img
				src={thumbnail}
				alt={meta.title}
				class="aspect-video w-full object-cover"
				loading="eager"
			/>
		</div>
	{/if}

	<header class="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr] lg:gap-16">
		<div class="space-y-6">
			<div class="space-y-4">
				<h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl">
					{meta.title}
				</h1>
				<div
					class="text-muted-foreground flex flex-wrap items-center gap-x-6 gap-y-2 text-sm sm:text-base"
				>
					{#if meta.role}
						<div class="flex items-center gap-2 font-mono">
							<Briefcase class="h-4 w-4 opacity-70" />
							<span>{meta.role}</span>
						</div>
					{/if}
					{#if meta.year}
						<div class="flex items-center gap-2 font-mono">
							<Calendar class="h-4 w-4 opacity-70" />
							<span>{meta.year}</span>
						</div>
					{/if}
				</div>
			</div>
			{#if meta.summary}
				<p class="text-muted-foreground text-lg leading-relaxed">
					{meta.summary}
				</p>
			{/if}
		</div>

		<div class="flex flex-col gap-6 lg:border-l lg:pt-2 lg:pl-10">
			{#if link?.url}
				<Button
					href={link.url}
					target="_blank"
					rel="noopener noreferrer"
					size="lg"
					class="w-full gap-2 lg:w-auto"
				>
					{link.label ?? "Visit Live Site"}
					<ExternalLink class="h-4 w-4" />
				</Button>
			{/if}

			{#if tech.length > 0}
				<div class="space-y-3">
					<h3
						class="text-muted-foreground text-xs font-semibold tracking-wider uppercase"
					>
						Technologies
					</h3>
					<div class="flex flex-wrap gap-2">
						{#each tech as t}
							<Badge
								variant="secondary"
								class="shrink-0 font-mono text-xs font-normal"
							>
								{t}
							</Badge>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</header>

	<Separator class="my-12 lg:my-16" />

	<section class="mx-auto space-y-12 lg:space-y-16">
		{#if highlights.length > 0}
			<section>
				<h2 class="mb-6 text-2xl font-bold tracking-tight">Key Highlights</h2>
				<ul class="grid gap-x-8 gap-y-4 sm:grid-cols-2">
					{#each highlights as highlight}
						<li class="text-muted-foreground flex items-start gap-3 text-base">
							<span
								class="bg-primary/10 text-primary mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
							>
								<Check class="h-3 w-3" />
							</span>
							<span>{highlight}</span>
						</li>
					{/each}
				</ul>
			</section>
			<Separator />
		{/if}

		<section
			class="prose prose-sm md:prose-base dark:prose-invert prose-headings:leading-none prose-li:leading-normal mx-auto max-w-3xl min-w-0"
		>
			<data.content />
		</section>
	</section>
</article>
