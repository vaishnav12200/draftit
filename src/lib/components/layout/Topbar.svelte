<script>
	let { title = "DraftIt" } = $props();

	const toggleNav = () => {
		if (typeof document === "undefined") return;
		document.body.classList.toggle("nav-open");
	};
</script>

<div class="topbar">
	<button class="logo" type="button" aria-label="Toggle menu" on:click={toggleNav}>
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

