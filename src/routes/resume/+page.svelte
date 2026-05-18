<script lang="ts">
	import SEO from "$lib/components/SEO.svelte";
	import { Button } from "$lib/components/ui/button";
	import { Separator } from "$lib/components/ui/separator";
	import { Badge } from "$lib/components/ui/badge";

	type Link = { label: string; href: string };

	type Entry = {
		title: string;
		subtitle?: string;
		date?: string;
		location?: string;
		meta?: string;
		bullets?: string[];
		tags?: string[];
		links?: Link[];
	};

	type Section =
		| { id: string; title: string; variant: "entries"; entries: Entry[] }
		| { id: string; title: string; variant: "list"; items: string[] };

	type SkillGroup = { label: string; items: string[] };

	type ProfileData = {
		targetTitle: string;
		summary: string;
		sections: Section[];
		skillGroups: SkillGroup[];
	};

	const header = {
		name: "Ahmad Bukhari",
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

	const profiles: Record<"data" | "freelance", ProfileData> = {
		data: {
			targetTitle: "Data Analyst",
			summary:
				"Data analyst with hands-on experience in data cleaning, segmentation (RFM, K-Means), funnel analysis, and Tableau dashboarding. Strong at translating business questions into analysis plans, communicating insights clearly, and recommending actionable next steps.",
			sections: [
				{
					id: "experience",
					title: "Experience",
					variant: "entries",
					entries: [
						{
							title: "Data Analyst Associate",
							subtitle: "RevoU x Telkom Indonesia (RevoU NEXT)",
							date: "May 2024 – Aug 2024",
							location: "Remote,  Indonesia",
							meta: "Project-based",
							bullets: [
								"Processed and cleaned 100,000+ data points to improve data quality and analysis readiness.",
								"Segmented 10,000+ customers using RFM and K-Means clustering to identify high-value and at-risk cohorts.",
								"Conducted funnel analysis and uncovered >25% drop-off at a critical stage; summarized likely causes and prioritized actions.",
								"Built interactive Tableau dashboards for KPI monitoring, reducing manual reporting and enabling faster decisions.",
							],
							tags: [
								"Customer Segmentation",
								"Funnel Optimization",
								"Data QA",
								"Stakeholder Reporting",
							],
						},
						{
							title: "Instrumentation System Intern",
							subtitle: "PT Petrokimia Gresik",
							date: "Jan 2021 – Feb 2021",
							location: "Remote, Indonesia",
							meta: "Internship",
							bullets: [
								"Documented boiler measurement & control instrumentation and how operational metrics are monitored/visualized in the control room.",
								"Produced structured reporting on monitoring/control workflows to support clearer operational understanding.",
								"Led an intern team of 10 to deliver group assignments on time.",
							],
							tags: [
								"Process Documentation",
								"Operational Reporting",
								"Team Leadership",
							],
						},
					],
				},
				{
					id: "projects",
					title: "Projects",
					variant: "entries",
					entries: [
						{
							title: "Begin Again Custom POS System",
							subtitle: "Internal Tooling",
							date: "Jan 2026 – Present",
							location: "Amuntai, Indonesia",
							meta: "SvelteKit + Supabase",
							bullets: [
								"Designed and implemented a kiosk-style internal Point of Sale application to streamline order entry.",
								"Developed a PostgreSQL-backed transaction ledger with immutable audit triggers and materialized views for accurate COGS tracking.",
								"Successfully migrated database infrastructure from local instances to Supabase cloud hosting.",
							],
							tags: ["SvelteKit", "Svelte 5", "Supabase", "PostgreSQL"],
						},
						{
							title: "Optimising Promotional Strategies to Drive Sales Performance",
							subtitle: "RevoU Project",
							date: "July 2024 - Aug 2024",
							location: "Remote, Indonesia",
							meta: "Case study",
							bullets: [
								"Evaluated promotional effectiveness using an A/B testing approach.",
								"Recommended targeted promotions based on regional + product analysis; achieved ~10% total sales lift (case outcome).",
							],
							tags: ["Python", "Jupyter Notebook", "Tableau", "MySQL"],
						},
					],
				},
				{
					id: "education",
					title: "Education",
					variant: "entries",
					entries: [
						{
							title: "RevoU",
							subtitle: "Full-stack Data Analytics",
							date: "May 2024 – Aug 2024",
							location: "Remote, Indonesia",
							meta: "Excellent (Certified)",
						},
						{
							title: "Universitas Gadjah Mada",
							subtitle: "Bachelor of Engineering (Nuclear Engineering)",
							date: "Aug 2018 – Mar 2023",
							location: "Yogyakarta, Indonesia",
							meta: "GPA: 3.56 / 4.00",
						},
					],
				},
			],
			skillGroups: [
				{
					label: "Analytics",
					items: [
						"EDA",
						"Data cleaning & QA",
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
					items: [
						"Spreadsheet/Excel",
						"MySQL",
						"GCP Console",
						"PostgreSQL",
						"Supabase",
						"Python",
						"Jupyter Notebook",
						"Marimo",
						"Tableau",
					],
				},
			],
		},
		freelance: {
			targetTitle: "Freelance Web Developer",
			summary:
				"Full-stack developer specializing in modern web applications using SvelteKit and Astro. Experienced in building performant client-facing websites, robust internal POS tools, and implementing seamless database architectures with PostgreSQL and Supabase.",
			sections: [
				{
					id: "experience",
					title: "Experience",
					variant: "entries",
					entries: [
						{
							title: "Freelance Web Developer (Fullstack)",
							subtitle: "Client Projects",
							date: "2024 – Present",
							location: "Remote, Indonesia",
							meta: "",
							bullets: [
								"Delivered performance-focused websites and internal tools for clients with highly maintainable content structures.",
								"Built lightweight automations (e.g., document/invoice workflows) to reduce repetitive manual tasks for local businesses.",
							],
							tags: [
								"Performance Optimization",
								"Process Automation",
								"System Migration",
								"Client Delivery",
							],
						},
					],
				},
				{
					id: "projects",
					title: "Projects",
					variant: "entries",
					entries: [
						{
							title: "Begin Again Custom POS System",
							subtitle: "Internal Tooling",
							date: "Jan 2026 – Present",
							location: "Amuntai, Indonesia",
							meta: "SvelteKit + Supabase",
							bullets: [
								"Designed and implemented a kiosk-style internal Point of Sale application to streamline order entry.",
								"Developed a PostgreSQL-backed transaction ledger with immutable audit triggers and materialized views for accurate COGS tracking.",
								"Successfully migrated database infrastructure from local instances to Supabase cloud hosting.",
							],
							tags: ["SvelteKit", "Svelte 5", "Supabase", "PostgreSQL"],
						},
						{
							title: "CHAMPS UI Website",
							subtitle: "Corporate Profile",
							date: "Apr 2025 – Present",
							location: "Remote, Indonesia",
							meta: "Astro + i18n",
							bullets: [
								"Built the official multilingual, performance-oriented site for the Center for Health Administration and Policy Studies.",
							],
							tags: ["Astro", "Tailwind CSS", "i18n"],
						},
						{
							title: "bukhari.day",
							subtitle: "Personal Portfolio & Blog",
							date: "Aug 2025 – Present",
							location: "Remote, Indonesia",
							meta: "Svelte 5 + MDSvex",
							bullets: ["Developed a custom portfolio leveraging Svelte 5 runes."],
							tags: ["Svelte 5", "MDSvex", "Tailwind CSS"],
						},
					],
				},
				{
					id: "education",
					title: "Education",
					variant: "entries",
					entries: [
						{
							title: "Universitas Gadjah Mada",
							subtitle: "Bachelor of Engineering (Nuclear Engineering)",
							date: "Aug 2018 – Mar 2023",
							location: "Yogyakarta, Indonesia",
							meta: "GPA: 3.56 / 4.00",
						},
					],
				},
			],
			skillGroups: [
				{
					label: "Frontend",
					items: [
						"TypeScript",
						"Svelte / SvelteKit (Runes)",
						"Astro",
						"Tailwind CSS (v4)",
					],
				},
				{
					label: "Backend & Database",
					items: ["PostgreSQL", "Supabase", "Jupyter Notebook", "Marimo"],
				},
			],
		},
	};

	let activeTab = $state<"data" | "freelance">("data");

	let currentProfile = $derived(profiles[activeTab]);

	const joinParts = (...parts: Array<string | undefined>) => parts.filter(Boolean).join(" • ");
</script>

<SEO title="Resume" description="{currentProfile.targetTitle} resume of {header.name}." />

<div class="container space-y-8 py-6 md:py-12 lg:max-w-3xl">
	<!-- Tab Controls (Hidden when printing) -->
	<div class="bg-muted/50 mb-8 flex w-fit flex-wrap gap-2 rounded-lg p-1.5 print:hidden">
		<Button
			variant={activeTab === "data" ? "default" : "ghost"}
			size="sm"
			onclick={() => (activeTab = "data")}
		>
			Data Analyst
		</Button>
		<Button
			variant={activeTab === "freelance" ? "default" : "ghost"}
			size="sm"
			onclick={() => (activeTab = "freelance")}
		>
			Freelance
		</Button>
	</div>

	<!-- 1) Header -->
	<section class="space-y-4">
		<div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
			<div class="space-y-1">
				<h1 class="text-3xl font-bold">{header.name}</h1>
				<p class="text-muted-foreground font-medium">{currentProfile.targetTitle}</p>
				<p class="text-foreground flex items-center text-sm">
					{header.location}
				</p>
				<div
					class="text-foreground mx-auto mt-2 flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-sm"
				>
					<a class="hover:underline" href="mailto:{header.email}">{header.email}</a>
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

			<Button
				href={activeTab === "data"
					? "/Ahmad_Bukhari_Data_Analyst_Resume.pdf"
					: "/Ahmad_Bukhari_Web_Dev_Resume.pdf"}
				download={activeTab === "data"
					? "Ahmad_Bukhari_Data_Analyst_Resume.pdf"
					: "Ahmad_Bukhari_Web_Dev_Resume.pdf"}
				variant="secondary"
				class="print:hidden"
			>
				Download PDF
			</Button>
		</div>

		<Separator />
	</section>

	<!-- 2) Summary -->
	<section class="space-y-3">
		<h2 class="text-xl font-semibold">Summary</h2>
		<p class="text-muted-foreground leading-relaxed">{currentProfile.summary}</p>
	</section>

	<!-- 3) Sections -->
	<section class="space-y-8">
		{#each currentProfile.sections as section (section.id)}
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
			{#each currentProfile.skillGroups as group (group.label)}
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
