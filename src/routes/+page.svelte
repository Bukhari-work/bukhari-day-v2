<script lang="ts">
	import type { PageData } from "./$types";
	import SEO from "$lib/components/SEO.svelte";
	import ProjectCard from "$lib/components/ProjectCard.svelte"; // UI Components

	import { Button } from "$lib/components/ui/button";
	import { Badge } from "$lib/components/ui/badge"; // Icons

	import { Github, Linkedin, MapPin } from "@lucide/svelte";

	let { data }: { data: PageData } = $props();

	type StackGroup = {
		category: string;
		items: string[];
		variant: "default" | "secondary" | "outline";
	}; // Single source of truth. Easy to reorder or add new groups.

	const techStack: StackGroup[] = [
		{
			category: "Analytics",
			items: ["SQL (PostgreSQL, BigQuery)", "Python (Pandas, NumPy)", "Excel", "Tableau"],
			variant: "secondary",
		},
		{
			category: "Frontend",
			items: ["HTML", "CSS / SCSS", "JavaScript / TypeScript", "SvelteKit"],
			variant: "outline",
		},
		{
			category: "Scripting & Tools",
			items: ["Bash", "Git"],
			variant: "outline",
		},
	];
</script>

<SEO
	title="Home"
	description="Data Analyst focused on product analytics, dashboards, and decision-ready insights. Based in Indonesia."
/>

<div class="container space-y-16 py-6 md:py-12 xl:max-w-5xl">
	<!-- HERO -->
	<section class="flex flex-col gap-8 md:max-w-prose">
		<div
			class="bg-muted/50 hover:bg-muted inline-flex w-fit items-center rounded-full border px-3 py-1 text-sm font-medium transition-colors"
		>
			<span class="relative mr-2 flex h-2 w-2">
				<span
					class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-600 opacity-75"
				></span>
				<span class="relative inline-flex h-2 w-2 rounded-full bg-green-800"></span>
			</span>
			Open to Data Analyst roles
			<span class="text-muted-foreground ml-2 hidden border-l pl-2 text-xs sm:inline-flex">
				<MapPin class="mt-0.5 mr-1 h-3 w-3" /> Banjarmasin • Indonesia (open to relocate)
			</span>
		</div>
		<div class="space-y-6">
			<h1 class="text-5xl font-bold tracking-tighter sm:text-6xl lg:text-7xl">
				Hello!<br /> I am
				<strong class="text-emerald-600 dark:text-emerald-400">
					<a href="/about" class="transition-opacity hover:opacity-80">
						&lt;<span class="text-foreground">Bukhari</span>/&gt;
					</a>
				</strong>
			</h1>
			<p class="text-muted-foreground text-lg leading-relaxed">
				I’m a data analyst with a background in nuclear engineering. I bring the rigor of
				<span class="underline decoration-emerald-500/50 decoration-wavy underline-offset-4"
					>nuclear engineering</span
				>
				to product analytics. I build <strong>reliable</strong> data pipelines and
				<strong>dashboards</strong>
				that turn chaotic user behavior into <strong>clear</strong>
				<span class="line-through">at least for me</span> <strong>strategy</strong>.
			</p>
		</div>
		<div class="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-12">
			<div class="flex flex-col gap-3 sm:flex-row">
				<Button size="lg" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
					<Linkedin class="mr-2 h-4 w-4" /> LinkedIn
				</Button>
				<Button
					size="lg"
					variant="outline"
					href="https://github.com/"
					target="_blank"
					rel="noreferrer"
				>
					<Github class="mr-2 h-4 w-4" /> GitHub
				</Button>
				<Button size="lg" variant="outline" href="/resume">Resume</Button>
			</div>
		</div>
		<div class="space-y-3 pt-2">
			<h3 class="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
				Tech Stack
			</h3>
			<div class="flex flex-wrap gap-2">
				{#each techStack as group}
					{#each group.items as skill}
						<Badge variant={group.variant} class="px-3 py-1 text-sm font-normal">
							{skill}
						</Badge>
					{/each}
				{/each}
			</div>
		</div>
	</section>

	<!-- FEATURED PROJECTS -->
	<section class="space-y-6">
		<div class="flex items-center justify-between">
			<h2 class="font-mono text-2xl font-bold tracking-tight">Featured projects</h2>
			<Button variant="link" href="/projects">View all &rarr;</Button>
		</div>
		<div class="grid gap-6 md:grid-cols-2">
			{#each data.featuredProjects as project}
				<ProjectCard {project} />
			{/each}
		</div>
	</section>
</div>
