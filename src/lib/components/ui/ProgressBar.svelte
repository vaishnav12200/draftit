<script>
	let { value = 0, tone = "orange" } = $props();
	const width = $derived(() => Math.min(100, Math.max(0, value)));
	const fill = $derived(() => `var(--${tone})`);
</script>

<div class="card-bar">
	<div class="card-fill" style={`width: ${width}%; background: ${fill}`}></div>
</div>

