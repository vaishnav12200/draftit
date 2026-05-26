<script>
	let { initials = "AR", label = "User" } = $props();
</script>

<button class="avatar" type="button" aria-label={label} title={label}>
	{initials}
</button>

