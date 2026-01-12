<script lang="ts">
	import type { Project } from "$lib/types";
	import { Badge } from "$lib/components/ui/badge";
	import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "$lib/components/ui/card";
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";
	import { FolderOpen } from "@lucide/svelte";

	type Props = HTMLAttributes<HTMLDivElement> & {
		project: Project;
		maxTech?: number;
		hrefBase?: string;
	};

	let {
		project,
		maxTech = 3,
		hrefBase = "/projects",
		class: className,
		...rest
	}: Props = $props();

	// Logic
	const href = $derived(`${hrefBase}/${project.slug}`);

	const tech = $derived(project.tech ?? []);
	const visibleTech = $derived(tech.slice(0, maxTech));
	const hiddenCount = $derived(Math.max(0, tech.length - maxTech));

	// Formatted strings
	const year = $derived(project.year ? String(project.year) : null);
	const role = $derived(project.role?.trim() ?? null);
	const summary = $derived(project.summary?.trim() ?? null);
	const hiddenTitle = $derived(tech.slice(maxTech).join(", "));
</script>

<Card
	class={cn(
		"group relative flex h-full flex-col overflow-hidden pt-0 transition-all",
		"hover:border-primary hover:shadow-md",
		"has-[a:focus-visible]:ring-ring has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-offset-2",
		className
	)}
	{...rest}
>
	<div class="bg-muted flex aspect-video w-full items-center overflow-hidden border-b">
		{#if project.thumbnail}
			<img
				src={project.thumbnail}
				alt={`${project.title} thumbnail`}
				aria-hidden="true"
				class="mx-auto my-auto aspect-video h-7/9 w-14/16 rounded-lg object-cover transition-transform duration-400 ease-in-out group-hover:scale-105"
				loading="lazy"
			/>
		{:else}
			<div class="text-muted-foreground/20 flex h-full w-full items-center justify-center">
				<FolderOpen size={48} strokeWidth={1} />
			</div>
		{/if}
	</div>

	<CardHeader>
		<div class="flex items-start justify-between gap-4">
			<CardTitle class="group-hover:text-primary text-lg leading-tight transition-colors">
				<a
					{href}
					data-sveltekit-preload-data="hover"
					class="after:absolute after:inset-0 after:z-10 focus:outline-none"
					aria-label={`View case study: ${project.title}`}
				>
					{project.title}
				</a>
			</CardTitle>

			{#if year}
				<Badge variant="secondary" class="shrink-0 font-mono text-xs font-normal">
					{year}
				</Badge>
			{/if}
		</div>

		{#if role}
			<div class="text-muted-foreground line-clamp-1 text-xs font-medium">
				{role}
			</div>
		{/if}
	</CardHeader>

	<CardContent class="flex-1">
		{#if summary}
			<p class="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
				{summary}
			</p>
		{/if}
	</CardContent>

	{#if visibleTech.length}
		<CardFooter class="pt-0">
			<div class="flex flex-wrap gap-2">
				{#each visibleTech as t (t)}
					<Badge variant="secondary" class="shrink-0 font-mono text-xs font-normal">
						{t}
					</Badge>
				{/each}

				{#if hiddenCount > 0}
					<Badge
						variant="outline"
						class="shrink-0 font-mono text-xs font-normal"
						title={hiddenTitle}
					>
						+{hiddenCount}
					</Badge>
				{/if}
			</div>
		</CardFooter>
	{/if}
</Card>
