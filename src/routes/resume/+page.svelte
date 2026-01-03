<script>
	import { Button } from "$lib/components/ui/button";
	import { Separator } from "$lib/components/ui/separator";
	import { Badge } from "$lib/components/ui/badge";

	const skills = ["JavaScript/TypeScript", "SvelteKit", "Tailwind CSS", "Node.js", "SQL", "Git"];
</script>

<svelte:head>
	<title>Resume | Ahmad</title>
</svelte:head>

<div class="container max-w-3xl space-y-8 py-12">
	<div class="flex items-start justify-between">
		<div>
			<h1 class="text-3xl font-bold">Ahmad Bukhari</h1>
			<p class="text-muted-foreground">Full Stack Engineer</p>
			<div class="text-muted-foreground mt-2 flex gap-2 text-sm">
				<span>📍 Banjarmasin, ID</span>
				<span>•</span>
				<a href="mailto:your@email.com" class="hover:underline">your@email.com</a>
			</div>
		</div>
		<Button variant="outline" onclick={() => window.print()}>Print PDF</Button>
	</div>

	<Separator />

	<section>
		<h2 class="mb-4 text-xl font-semibold">Summary</h2>
		<p class="text-muted-foreground leading-relaxed">
			Results-oriented developer with experience building performant web applications. Proven
			track record of delivering client projects (Public Health Research) and managing local
			business operations. Passionate about SvelteKit and modern tooling.
		</p>
	</section>

	<section class="space-y-6">
		<h2 class="border-b pb-2 text-xl font-semibold">Experience</h2>

		<div class="space-y-2">
			<div class="flex justify-between">
				<h3 class="font-bold">Freelance Web Developer</h3>
				<span class="text-muted-foreground text-sm">2024 — Present</span>
			</div>
			<p class="text-muted-foreground text-sm italic">Remote / Banjarmasin</p>
			<ul class="text-muted-foreground ml-5 list-outside list-disc space-y-1 text-sm">
				<li>
					Developed a multilingual corporate website for a Public Health Research firm
					using Astro.
				</li>
				<li>
					Improved site performance (Lighthouse score 95+) by migrating legacy React apps
					to SvelteKit.
				</li>
				<li>Implemented automated invoice generation systems for local clients.</li>
			</ul>
		</div>

		<div class="space-y-2">
			<div class="flex justify-between">
				<h3 class="font-bold">Business Owner</h3>
				<span class="text-muted-foreground text-sm">Jun 2025 — Present</span>
			</div>
			<p class="text-muted-foreground text-sm italic">Rumaisha Coffee</p>
			<ul class="text-muted-foreground ml-5 list-outside list-disc space-y-1 text-sm">
				<li>
					Managed daily operations, inventory, and marketing for a local coffee brand.
				</li>
				<li>Launched "Rumaisha Cold Brew" product line, increasing monthly revenue.</li>
			</ul>
		</div>
	</section>

	<section>
		<h2 class="mb-4 border-b pb-2 text-xl font-semibold">Skills</h2>
		<div class="flex flex-wrap gap-2">
			{#each skills as skill}
				<Badge variant="secondary">{skill}</Badge>
			{/each}
		</div>
	</section>
</div>
