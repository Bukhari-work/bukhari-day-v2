<script lang="ts">
	// You can add 'skills' arrays here if you want dynamic rendering
	const skills = ["SvelteKit", "Tailwind CSS", "TypeScript", "Node.js", "Design Systems"];
</script>

<svelte:head>
	<title>About | Your Name</title>
</svelte:head>

<div class="container max-w-5xl py-12">
	<div class="prose dark:prose-invert max-w-none">
		<h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl">About Me</h1>
		<p class="lead text-muted-foreground text-xl">
			I am a software engineer with an entrepreneurial spirit based in South Kalimantan.
		</p>

		<p>
			I don't just write code; I build solutions. My background is unique—I balance running a
			local coffee business with full-stack web development. This gives me a perspective most
			developers miss: <strong>I understand that software must drive business results.</strong
			>
		</p>

		<h2>My Stack</h2>
		<p>
			I focus on the "Bleeding Edge" of the JavaScript ecosystem because it lets me ship
			faster.
		</p>
		<ul>
			<li><strong>Frontend:</strong> Svelte 5, SvelteKit, Tailwind v4, Astro</li>
			<li><strong>Backend:</strong> Node.js, Supabase, PostgreSQL</li>
			<li><strong>Tools:</strong> TypeScript, Docker, Git</li>
		</ul>

		<h2>Beyond Code</h2>
		<p>
			When I'm not debugging, I'm likely experimenting with new coffee blends for
			<strong>Rumaisha</strong> (my coffee shop) or running outdoors to clear my head. I also
			enjoy reading fantasy novels—currently finishing <em>By Blood, By Salt</em>.
		</p>
	</div>
</div>
