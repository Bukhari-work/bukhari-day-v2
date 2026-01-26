<script lang="ts">
	import SEO from "$lib/components/SEO.svelte";
	import InterestCard, { type Interest } from "$lib/components/InterestCard.svelte";
	import { MapPin, Activity, Store, BookOpen } from "@lucide/svelte";

	// Data structure for "Beyond" cards
	const interests: Interest[] = [
		{
			category: "Physical",
			title: "Running",
			icon: Activity,
			description:
				"Pelari Kalcer Pakai Strava, if you know what I mean (I don't use Strava).",
			meta: "5km Avg",
			variant: "default" as const,
			imageUrl: "/images/ahmad-bukhari-jog.webp",
		},
		{
			category: "Escape",
			title: "Reading",
			icon: BookOpen,
			description:
				"High fantasy and and slice-of-life. Currently finishing By Blood, By Salt.",
			meta: "Chapter 4",
			variant: "outline" as const,
			imageUrl: "/images/by-blood-by-salt-cover.jpg",
		},
		{
			category: "Escape",
			title: "Begin Again Coffee",
			icon: Store,
			description:
				"I co-own a small coffee shop. It keeps me grounded (no pun intended) in the realities of business logic.",
			meta: "Co-owner",
			variant: "outline" as const,
			imageUrl: "/images/begin-again.webp",
		},
	];
</script>

<SEO
	title="About Me | Data Analyst"
	description="I am a Data Analyst with a background in Nuclear Engineering. I specialize in turning raw data into actionable business insights."
/>

<div class="container space-y-16 py-12 xl:max-w-5xl">
	<header class="mb-12 max-w-prose space-y-4">
		<h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl">About Me</h1>
	</header>

	<section class="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
		<div class="shrink-0 md:w-1/3">
			<div
				class="bg-muted/50 relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl border shadow-sm"
			>
				<img
					src="/images/ahmad-bukhari.webp"
					alt="Ahmad Bukhari"
					class="h-full w-full object-cover"
					loading="eager"
				/>
			</div>

			<div class="text-muted-foreground mt-6 flex items-center justify-center text-sm">
				<MapPin class="mr-2 h-4 w-4" />
				<span>Banjarmasin, Indonesia</span>
			</div>
		</div>

		<div class="text-muted-foreground space-y-6 text-lg leading-relaxed md:pt-2">
			<p>
				I am a Data Analyst based in South Kalimantan. My work focuses on bridging the gap
				between chaotic datasets and clear, actionable business strategy.
			</p>

			<p>
				With a background in <strong class="text-foreground">Nuclear Engineering</strong>, I
				bring a methodical, scientific rigor to data pipelines and reporting. I believe that
				good analysis isn't just about the numbers—it's about asking the right questions to
				drive
				<span
					class="text-foreground decoration- font-medium underline decoration-emerald-500/50 underline-offset-4"
				>
					decision-ready insights.
				</span>
			</p>
		</div>
	</section>

	<section class="space-y-6">
		<div class="max-w-2xl">
			<h2 class="font-mono text-2xl font-bold tracking-tight">Beyond the Data</h2>
			<p class="text-muted-foreground mt-2 text-lg">
				When I'm not querying databases or building dashboards, I focus on offline pursuits.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-3">
			{#each interests as item (item.title)}
				<InterestCard {...item} />
			{/each}
		</div>
	</section>
</div>
