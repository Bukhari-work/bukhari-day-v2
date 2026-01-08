<script lang="ts">
	import { Sun, Moon, Monitor } from "@lucide/svelte";
	import { setMode, resetMode, mode, userPrefersMode } from "mode-watcher";
	import { Button } from "$lib/components/ui/button";

	// For UI selection state (light/dark/system)
	let preferred = $derived(userPrefersMode.current);

	// Optional: if you ever want to show what system resolved to (light/dark)
	let resolved = $derived(mode.current);
</script>

<div class="bg-background flex items-center gap-1 rounded-lg border p-1 shadow-xs">
	<Button
		variant={preferred === "light" ? "secondary" : "ghost"}
		size="icon"
		class="h-7 w-7 rounded-lg"
		onclick={() => setMode("light")}
		aria-label="Light Mode"
	>
		<Sun class="h-4 w-4" />
	</Button>

	<Button
		variant={preferred === "system" ? "secondary" : "ghost"}
		size="icon"
		class="h-7 w-7 rounded-lg"
		onclick={resetMode}
		aria-label="System Mode"
		title={resolved ? `System is ${resolved}` : undefined}
	>
		<Monitor class="h-4 w-4" />
	</Button>

	<Button
		variant={preferred === "dark" ? "secondary" : "ghost"}
		size="icon"
		class="h-7 w-7 rounded-lg"
		onclick={() => setMode("dark")}
		aria-label="Dark Mode"
	>
		<Moon class="h-4 w-4" />
	</Button>
</div>
