<script lang="ts">
	import type { Project } from "$lib/types";
	import { Badge } from "$lib/components/ui/badge";
	import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";

	type Props = HTMLAttributes<HTMLDivElement> & {
		project: Project;
		maxTech?: number;
		ctaLabel?: string;
		hrefBase?: string;
	};

	let {
		project,
		maxTech = 3,
		ctaLabel = "View case study",
		hrefBase = "/projects",
		class: className,
		...rest
	}: Props = $props();

	const href = $derived(`${hrefBase}/${project.slug}`);

	const tech = $derived(project.tech ?? []);
	const visibleTech = $derived(tech.slice(0, maxTech));
	const hiddenTech = $derived(tech.slice(maxTech));

	const year = $derived(project.year ? String(project.year) : "");
	const role = $derived((project.role ?? "").trim());
	const summary = $derived((project.summary ?? "").trim());

	const hiddenTitle = $derived(hiddenTech.join(", "));
	const ariaLabel = $derived(`Open case study: ${project.title}`);
</script>

<Card
	class={cn(
		"group relative flex h-full flex-col overflow-hidden border transition-all",
		"hover:border-foreground/40 hover:shadow-md",
		"focus-within:ring-ring focus-within:ring-2 focus-within:ring-offset-2",
		className
	)}
	{...rest}
>
	{#if project.thumbnail}
		<a {href} class="bg-muted aspect-video w-full overflow-hidden border-b">
			<img
				src={project.thumbnail}
				alt={`${project.title} thumbnail`}
				class="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
				loading="lazy"
			/>
		</a>
	{/if}

	<CardHeader class="">
		<div class="flex items-center justify-between gap-4">
			<CardTitle class="hover:text-muted-foreground text-lg">
				<a
					{href}
					data-sveltekit-preload-data="hover"
					class="focus:outline-none"
					aria-label={ariaLabel}
				>
					<span class="line-clamp-1" title={project.title}>{project.title}</span>
				</a>
			</CardTitle>

			{#if year}
				<span
					class="text-muted-foreground shrink-0 font-mono text-xs"
					aria-label={`Year: ${year}`}
				>
					{year}
				</span>
			{/if}
		</div>

		{#if role}
			<div class="text-muted-foreground line-clamp-1 text-xs">{role}</div>
		{/if}
	</CardHeader>

	<CardContent class="flex-1 space-y-4">
		{#if summary}
			<p class="text-muted-foreground line-clamp-2 text-sm leading-relaxed">{summary}</p>
		{/if}
	</CardContent>

	<CardFooter class="pt-2">
		{#if visibleTech.length}
			<div class="flex flex-wrap gap-2" aria-label="Technologies used">
				{#each visibleTech as t (t)}
					<Badge variant="secondary" class="pointer-events-none text-xs font-normal"
						>{t}</Badge
					>
				{/each}

				{#if hiddenTech.length}
					<Badge
						variant="outline"
						class="text-muted-foreground text-xs font-normal"
						title={hiddenTitle}
						aria-label={`More technologies: ${hiddenTitle}`}
					>
						+{hiddenTech.length}
					</Badge>
				{/if}
			</div>
		{/if}
	</CardFooter>
</Card>
