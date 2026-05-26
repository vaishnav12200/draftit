<script>
	let { label = "", title = "", type = "button" } = $props();
	const ariaLabel = $derived(() => label || title || "Action");
	const tooltip = $derived(() => title || label || "");
</script>

<button class="icon-btn" type={type} aria-label={ariaLabel} title={tooltip}>
	<slot />
</button>

