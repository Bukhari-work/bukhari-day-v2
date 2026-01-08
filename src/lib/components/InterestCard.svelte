<script lang="ts">
	import { Badge } from "$lib/components/ui/badge";
	import { cn } from "$lib/utils";
	import type { Component } from "svelte";

	// 1. Strict Typing with Interface
	interface Props {
		category: string;
		title: string;
		icon: Component;
		description: string;
		meta: string;
		variant?: "default" | "secondary" | "outline" | "destructive";
		imageUrl?: string;
		class?: string;
	}

	let {
		category,
		title,
		icon: Icon,
		description,
		meta,
		variant = "default",
		imageUrl,
		class: className,
	}: Props = $props();

	let isFlipped = $state(false);

	function toggleFlip() {
		isFlipped = !isFlipped;
	}

	function handleInnerClick(e: MouseEvent) {
		e.stopPropagation();
	}
</script>

<button
	class={cn(
		"group relative h-full w-full cursor-pointer text-left perspective-[1000px] focus:outline-none",
		className
	)}
	aria-pressed={isFlipped}
	onclick={toggleFlip}
	onkeydown={(e) => (e.key === "Enter" || e.key === " ") && toggleFlip()}
>
	<div
		class="relative grid w-full transition-all duration-500 ease-in-out transform-3d"
		class:flipped={isFlipped}
	>
		<div
			class="bg-card hover:border-primary col-start-1 row-start-1 flex flex-col justify-between rounded-xl border p-6 shadow-sm transition-colors backface-hidden"
		>
			<div class="mb-4 flex items-start justify-between">
				<div
					class="bg-muted text-foreground group-hover:bg-primary/10 group-hover:text-primary flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300"
				>
					<Icon class="h-5 w-5" />
				</div>
				<Badge {variant} class="pointer-events-none font-mono text-xs font-normal">
					{category}
				</Badge>
			</div>

			<div>
				<h3 class="text-foreground text-lg font-semibold tracking-tight">{title}</h3>
				<div class="text-muted-foreground mt-2 line-clamp-3 text-sm leading-relaxed">
					{@html description}
				</div>
			</div>

			<div
				class="text-muted-foreground mt-6 flex items-center border-t border-dashed pt-4 font-mono text-xs"
			>
				<span>Status: <span class="text-foreground font-medium">{meta}</span></span>
			</div>
		</div>

		<div
			class="bg-muted hover:border-primary relative col-start-1 row-start-1 h-full w-full rotate-y-180 overflow-hidden rounded-xl border p-6 shadow-lg backface-hidden"
		>
			{#if imageUrl}
				<img
					src={imageUrl}
					alt={title}
					class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
				/>
				<div
					class="from-card/80 via-card/40 to-card/10 absolute inset-0 dark:bg-linear-to-t"
				></div>
			{/if}
		</div>
	</div>
</button>

<style>
	.flipped {
		transform: rotateY(180deg);
	}
</style>
