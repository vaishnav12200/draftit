<script>
	const closeNav = () => {
		if (typeof document === "undefined") return;
		document.body.classList.remove("nav-open");
	};
</script>

<button class="nav-overlay" type="button" aria-label="Close menu" on:click={closeNav}></button>

