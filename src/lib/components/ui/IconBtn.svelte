<script>
	import { createEventDispatcher } from 'svelte';

	let { label = "", title = "", type = "button" } = $props();

	const ariaLabel = label || title || "Action";
	const tooltip = title || label || "";

	const dispatch = createEventDispatcher();
	function handleClick(e) {
		dispatch('click', e);
	}
</script>

<button class="icon-btn" type={type} aria-label={ariaLabel} title={tooltip} on:click={handleClick}>
	<slot />
</button>

