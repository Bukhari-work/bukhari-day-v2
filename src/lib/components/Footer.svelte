<script lang="ts">
	import ModeToggle from "$lib/components/ModeToggle.svelte";

	const currentYear = new Date().getFullYear();

	const LINKS = {
		source: {
			label: "GitHub",
			href: "https://github.com/Bukhari-work",
			external: true,
		},
		email: { label: "Email", href: "mailto:ahamdbukhariwork@gmail.com", external: false },
		linkedin: {
			label: "LinkedIn",
			href: "https://linkedin.com/in/ahmad-bukhari-6112891b7/",
			external: true,
		},
		rss: { label: "RSS", href: "/rss.xml", external: false },
	} as const;

	const NAV_LINKS = [LINKS.email, LINKS.linkedin, LINKS.rss, LINKS.source] as const;
</script>

<footer class="z-50 w-full">
	<div class="bg-background container border-t py-6 sm:border-t-0 sm:bg-transparent sm:py-8">
		<div class="sm:bg-card rounded-2xl px-4 py-4 sm:border sm:shadow-sm md:px-8">
			<div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
				<div class="text-center sm:text-left">
					<p class="text-sm">
						<span class="text-muted-foreground">© {currentYear}</span>
						<span class="text-foreground font-medium"> Ahmad Bukhari</span>
					</p>

					<p class="text-muted-foreground text-xs">Available for data analytics work.</p>
				</div>

				<div
					class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-end sm:gap-x-5"
				>
					<nav aria-label="Footer" class="text-muted-foreground text-sm">
						<ul
							class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-end"
						>
							{#each NAV_LINKS as link (link.href)}
								<li>
									<a
										class="hover:text-foreground transition-colors"
										href={link.href}
										target={link.external ? "_blank" : undefined}
										rel={link.external ? "noopener noreferrer" : undefined}
									>
										{link.label}
									</a>
								</li>
							{/each}
						</ul>
					</nav>

					<div class="bg-border hidden h-6 w-px sm:block" aria-hidden="true"></div>
					<ModeToggle />
				</div>
			</div>
		</div>
	</div>
</footer>
