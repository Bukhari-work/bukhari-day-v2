<script>
	export let size = 20;
	export let stroke = 1;
	export let fadeAmount = 0.3; // How much to fade (0 to 1)
</script>

<div class="fixed inset-0 -z-10 overflow-hidden bg-transparent">
	<svg class="stroke-accent absolute h-full w-full" aria-hidden="true">
		<defs>
			<!-- Grid pattern -->
			<pattern id="grid" width={size} height={size} patternUnits="userSpaceOnUse">
				<path d={`M ${size} 0 L 0 0 0 ${size}`} fill="none" stroke-width={stroke} />
			</pattern>

			<!-- Simple gradient mask -->
			<mask id="fade-mask">
				<linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
					<stop offset="0%" stop-color="white" stop-opacity="0" />
					<stop offset={`${fadeAmount * 100}%`} stop-color="white" stop-opacity="1" />
				</linearGradient>
				<rect width="100%" height="100%" fill="url(#grad)" />
			</mask>
		</defs>

		<!-- Grid with fade mask -->
		<rect width="100%" height="100%" fill="url(#grid)" mask="url(#fade-mask)" />
	</svg>
</div>
