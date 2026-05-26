<script>
	let { title = "Continue", subtitle = "", icon = "ti ti-pencil" } = $props();
</script>

<button class="continue-strip" type="button">
	<div class="continue-icon"><i class={icon}></i></div>
	<div>
		<div class="continue-title">{title}</div>
		<div class="continue-sub">{subtitle}</div>
	</div>
	<div class="continue-arrow"><i class="ti ti-arrow-right"></i></div>
</button>

