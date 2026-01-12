<script lang="ts">
	import SEO from "$lib/components/SEO.svelte";
	import { Button } from "$lib/components/ui/button";
	import { Separator } from "$lib/components/ui/separator";
	import { Badge } from "$lib/components/ui/badge";

	type Link = { label: string; href: string };

	type Entry = {
		title: string; // Role OR Project title OR Degree
		subtitle?: string; // Company / Program / School
		date?: string; // "May 2024 — Aug 2024"
		location?: string; // "Remote • Indonesia"
		meta?: string; // "Project-based", "GPA: ...", etc.
		bullets?: string[];
		tags?: string[];
		links?: Link[];
	};

	type Section =
		| { id: string; title: string; variant: "entries"; entries: Entry[] }
		| { id: string; title: string; variant: "list"; items: string[] };

	type SkillGroup = { label: string; items: string[] };

	const header = {
		name: "Ahmad Bukhari",
		targetTitle: "Junior Data Analyst",
		location: "Banjarmasin, Indonesia (open to relocate within Indonesia)",
		phone: "+62 818-0939-5517",
		email: "ahmadbukhariwork@gmail.com",
		linkedinLabel: "LinkedIn",
		linkedinUrl: "https://linkedin.com/in/ahmad-bukhari-6112891b7/",
		githubLabel: "GitHub",
		githubUrl: "https://github.com/Bukhari-work",
		portfolioLabel: "bukhari.day",
		portfolioUrl: "https://bukhari.day",
	};

	const summary =
		"Data analyst with hands-on experience in data cleaning, segmentation (RFM, K-Means), funnel analysis, and Tableau dashboarding. Strong at translating business questions into analysis plans, communicating insights clearly, and recommending actionable next steps.";

	//  Sections (Experience / Projects / Education / etc.)
	const sections: Section[] = [
		{
			id: "experience",
			title: "Experience",
			variant: "entries",
			entries: [
				{
					title: "Data Analyst Associate",
					subtitle: "RevoU x Telkom Indonesia (RevoU NEXT)",
					date: "May 2024 — Aug 2024",
					location: "Remote • Indonesia",
					meta: "Project-based",
					bullets: [
						"Processed and cleaned 100,000+ data points to improve data quality and analysis readiness.",
						"Segmented 10,000+ customers using RFM and K-Means clustering to identify high-value and at-risk cohorts.",
						"Conducted funnel analysis and uncovered >25% drop-off at a critical stage; summarized likely causes and prioritized actions.",
						"Built interactive Tableau dashboards for KPI monitoring, reducing manual reporting and enabling faster stakeholder decisions.",
					],
					tags: ["SQL", "Tableau", "RFM", "K-Means", "Funnel"],
				},
				{
					title: "Instrumentation System Intern",
					subtitle: "PT Petrokimia Gresik",
					date: "Jan 2021 — Feb 2021",
					location: "Remote, Indonesia",
					meta: "Internship",
					bullets: [
						"Documented boiler measurement & control instrumentation and how operational metrics are monitored/visualized in the control room.",
						"Produced structured reporting on monitoring/control workflows to support clearer operational understanding.",
						"Led an intern team of 10 to deliver group assignments on time.",
					],
					tags: ["Documentation", "Reporting", "Team leadership"],
				},
				{
					title: "Freelance Web Developer",
					subtitle: "Client Projects",
					date: "2024 — Present",
					location: "Remote, Indonesia",
					meta: "Freelance",
					bullets: [
						"Delivered performance-focused websites and internal tools for clients with maintainable content structures.",
						"Built lightweight automations (e.g., document/invoice workflows) to reduce repetitive manual tasks.",
					],
					tags: ["Delivery", "Automation", "Web"],
				},
				{
					title: "Business Owner",
					subtitle: "Begin Again Coffee",
					date: "Jun 2025 — Present",
					location: "Amuntai, Indonesia",
					meta: "Operations & marketing",
					bullets: [
						"Managed daily operations, inventory, and marketing for a local coffee brand.",
						"Launched product initiatives and executed local promotion plans.",
					],
					tags: ["Operations", "Marketing", "Ownership"],
				},
			],
		},
		{
			id: "projects",
			title: "Projects",
			variant: "entries",
			entries: [
				{
					title: "Customer Segmentation & Funnel Analysis",
					subtitle: "RevoU x Telkom Indonesia (RevoU NEXT)",
					date: "May 2024 — Aug 2024",
					location: "Remote, Indonesia",
					meta: "Capstone project",
					bullets: [
						"Cleaned and prepared a large dataset (100,000+ records) for analysis.",
						"Built customer segments (RFM + K-Means) and identified actionable cohorts for targeting/retention.",
						"Analyzed funnel performance and pinpointed >25% drop-off; proposed improvement hypotheses and next steps.",
						"Delivered stakeholder-ready Tableau dashboards for KPI tracking.",
					],
					tags: ["SQL", "Tableau", "Clustering", "Funnel"],
				},
				{
					title: "Optimising Promotional Strategies to Drive Sales Performance",
					subtitle: "RevoU Project",
					date: "2024",
					location: "Remote, Indonesia",
					meta: "Case study",
					bullets: [
						"Evaluated promotional effectiveness using an A/B testing approach.",
						"Recommended targeted promotions based on regional + product analysis; achieved ~10% total sales lift (case outcome).",
					],
					tags: ["A/B Testing", "Experiment analysis", "Business insights"],
				},
				{
					title: "Multilingual Corporate Website",
					subtitle: "Champs Universitas Indonesia • Freelance",
					date: "2024",
					location: "Remote, Indonesia",
					meta: "Astro + i18n",
					bullets: [
						"Built a multilingual, performance-oriented corporate site with a maintainable content structure.",
					],
					tags: ["Astro", "i18n", "Performance"],
				},
				{
					title: "Legacy React → SvelteKit Migration",
					subtitle: "Freelance • Client Projects",
					date: "2024",
					location: "Remote, Indonesia",
					meta: "Modernization",
					bullets: [
						"Migrated legacy UI to SvelteKit to improve maintainability and performance.",
					],
					tags: ["SvelteKit", "Refactor", "Performance"],
				},
				{
					title: "Automated Invoice Generation System",
					subtitle: "Freelance • Local Clients",
					date: "2024",
					location: "Remote, Indonesia",
					meta: "Automation",
					bullets: [
						"Developed automation to streamline invoice generation and reduce repetitive manual work.",
					],
					tags: ["Automation", "Tooling"],
				},
			],
		},
		{
			id: "education",
			title: "Education",
			variant: "entries",
			entries: [
				{
					title: "Full-stack Data Analytics",
					subtitle: "RevoU",
					date: "May 2024 — Aug 2024",
					location: "Remote, Indonesia",
					meta: "Hands-on: cleaning, analysis, visualization, business recommendations",
				},
				{
					title: "Bachelor of Engineering (Nuclear Engineering)",
					subtitle: "Universitas Gadjah Mada",
					date: "Aug 2018 — Mar 2023",
					location: "Yogyakarta, Indonesia",
					meta: "GPA: 3.56 / 4.00",
					bullets: [
						"HR and Village Development Staff — BEM KM UGM (Aug 2019 — Dec 2020).",
						"Collaborated with local leaders on community development initiatives; contributed to completing three village projects and improved participation via regular updates.",
					],
				},
			],
		},
		{
			id: "certifications",
			title: "Certifications",
			variant: "list",
			items: ["Certificate of Achievement — RevoU (Sep 2024)"],
		},
	];

	const skillGroups: SkillGroup[] = [
		{
			label: "Analytics",
			items: [
				"Data cleaning & QA",
				"EDA",
				"Customer segmentation (RFM)",
				"Clustering (K-Means)",
				"Funnel analysis",
				"A/B test analysis",
				"KPI design",
				"Dashboarding",
				"Insight storytelling",
			],
		},
		{
			label: "Tools",
			items: ["SQL", "Python", "Spreadsheet/Excel", "Tableau", "Git"],
		},
	];

	const joinParts = (...parts: Array<string | undefined>) => parts.filter(Boolean).join(" • ");
</script>

<SEO title="Resume" description="Data analyst resume of Ahmad Bukhari." />

<div class="container space-y-8 py-12 lg:max-w-3xl">
	<!-- 1) Header -->
	<section class="space-y-4">
		<div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
			<div class="space-y-1">
				<h1 class="text-3xl font-bold">{header.name}</h1>
				<!-- <p class="text-muted-foreground">{header.targetTitle}</p> -->
				<p class="text-foreground flex items-center text-sm">
					{header.location}
				</p>
				<div
					class="text-foreground mx-auto mt-2 flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-sm"
				>
					<a class="hover:underline" href={"mailto:" + header.email}>{header.email}</a>
					<!-- <span class="hidden sm:inline">•</span>
					<a class="hover:underline" href={"tel:" + header.phone}>{header.phone}</a> -->
					<span class="hidden sm:inline">•</span>
					<a
						class="hover:underline"
						href={header.linkedinUrl}
						target="_blank"
						rel="noreferrer"
					>
						{header.linkedinLabel}
					</a>
					<span class="hidden sm:inline">•</span>
					<a
						class="hover:underline"
						href={header.githubUrl}
						target="_blank"
						rel="noreferrer"
					>
						{header.githubLabel}
					</a>
					<!-- <span class="hidden sm:inline">•</span>
					<a
						class="hover:underline"
						href={header.portfolioUrl}
						target="_blank"
						rel="noreferrer"
					>
						{header.portfolioLabel}
					</a> -->
				</div>
			</div>

			<Button class="print:hidden" variant="outline" onclick={() => window.print()}>
				Download PDF
			</Button>
		</div>

		<Separator />
	</section>

	<!-- 2) Summary -->
	<section class="space-y-3">
		<h2 class="text-xl font-semibold">Summary</h2>
		<p class="text-muted-foreground leading-relaxed">{summary}</p>
	</section>

	<!-- 3) Sections -->
	<section class="space-y-8">
		{#each sections as section (section.id)}
			<div class="space-y-4">
				<h2 class="border-b pb-2 text-xl font-semibold">{section.title}</h2>

				{#if section.variant === "entries"}
					<div class="space-y-6 pl-4">
						{#each section.entries as e (e.title + (e.subtitle ?? "") + (e.date ?? ""))}
							<div class="space-y-2">
								<div
									class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between"
								>
									<div class="space-y-1">
										<h3 class="font-bold">{e.title}</h3>

										{#if e.meta || e.subtitle}
											<p class="text-muted-foreground text-sm italic">
												{joinParts(e.subtitle, e.meta)}
											</p>
										{/if}
									</div>

									<div class="text-muted-foreground text-sm sm:text-right">
										{#if e.date}
											<div>{e.date}</div>
										{/if}
										{#if e.location}
											<div class="mt-0.5">{e.location}</div>
										{/if}
									</div>
								</div>

								{#if e.bullets?.length}
									<ul
										class="text-muted-foreground ml-5 list-outside list-disc space-y-1 text-sm"
									>
										{#each e.bullets as b (b)}
											<li>{b}</li>
										{/each}
									</ul>
								{/if}

								{#if e.tags?.length}
									<div class="flex flex-wrap gap-2 pt-1">
										{#each e.tags as t (t)}
											<Badge variant="secondary">{t}</Badge>
										{/each}
									</div>
								{/if}
							</div>
						{/each}
					</div>
				{:else if section.variant === "list"}
					<ul class="text-muted-foreground ml-5 list-outside list-disc space-y-1 text-sm">
						{#each section.items as item (item)}
							<li>{item}</li>
						{/each}
					</ul>
				{/if}
			</div>
		{/each}
	</section>

	<!-- 4) Skills -->
	<section class="space-y-4">
		<h2 class="border-b pb-2 text-xl font-semibold">Skills</h2>

		<div class="space-y-4">
			{#each skillGroups as group (group.label)}
				<div class="space-y-2">
					<p class="text-muted-foreground text-sm font-medium">{group.label}</p>
					<div class="flex flex-wrap gap-2">
						{#each group.items as item (item)}
							<Badge variant="secondary">{item}</Badge>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</section>
</div>
