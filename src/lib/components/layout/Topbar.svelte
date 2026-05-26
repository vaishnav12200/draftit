<script>
	let { title = "DraftIt" } = $props();
</script>

<div class="topbar">
	<button class="logo" type="button">
		<div class="logo-icon">D</div>
		<span class="logo-text">{title}</span>
	</button>
	<slot name="center" />
	<div class="topbar-right">
		<slot name="actions" />
	</div>
</div>

