<script lang="ts">
	let { data } = $props();
	import ProjectCard from "$lib/components/ProjectCard.svelte";
	import { Button } from "$lib/components/ui/button";
</script>

<div class="container max-w-5xl space-y-20 py-12">
	<section class="max-w-2xl space-y-6">
		<div class="bg-muted inline-flex items-center rounded-lg px-3 py-1 text-sm font-medium">
			🎉 Available for new projects
		</div>

		<h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl">
			Building fast, accessible web apps in <span class="text-primary">Banjarmasin</span>.
		</h1>

		<p class="text-muted-foreground text-xl leading-relaxed">
			Hi, I'm <span class="text-foreground font-semibold">Ahmad</span>. I am a Full Stack
			Developer who bridges the gap between complex logic and beautiful UI. I specialize in
			<span class="text-foreground">SvelteKit</span>,
			<span class="text-foreground">Tailwind CSS</span>, and building tools that help real
			businesses grow.
		</p>

		<div class="flex gap-4">
			<Button size="lg" href="/projects">View My Work</Button>
			<Button variant="outline" size="lg" href="/resume">View Resume</Button>
		</div>
	</section>

	<section class="space-y-8">
		<div class="flex items-center justify-between">
			<h2 class="text-2xl font-bold tracking-tight">Featured Projects</h2>
			<Button variant="link" href="/projects">View all &rarr;</Button>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
			{#each data.featuredProjects as project}
				<ProjectCard {project} />
			{/each}
		</div>
	</section>
</div>
