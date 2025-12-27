<script lang="ts">
	import ArrowUpIcon from "@lucide/svelte/icons/arrow-up";
	import { Button } from "$lib/components/ui/button/index.js";

	let { data } = $props();
</script>

<div class="flex flex-wrap items-center gap-2 md:flex-row">
	<Button variant="outline">Button</Button>
	<Button variant="outline" size="icon" aria-label="Submit">
		<ArrowUpIcon />
	</Button>
</div>

<h1 class="font-sans">Welcome to SvelteKit</h1>
<p>
	Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
</p>

<button
	class="p-auto m-auto items-center font-mono text-xl transition-all duration-1000 hover:font-semibold"
>
	Hover to bolden smoothly
</button>

<a class="block" href="/writings">My Writings</a>
