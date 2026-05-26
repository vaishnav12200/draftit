<script>
	let { title = "DraftIt" } = $props();
</script>

<div class="topbar">
	<button class="logo" type="button">
		<div class="logo-icon menu-icon" aria-hidden="true">
			<span class="menu-line"></span>
			<span class="menu-line"></span>
			<span class="menu-line"></span>
		</div>
		<span class="logo-text">{title}</span>
	</button>
	<slot name="center" />
	<div class="topbar-right">
		<slot name="actions" />
	</div>
</div>

