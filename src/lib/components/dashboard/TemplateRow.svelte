<script>
	let { templates = [] } = $props();
</script>

<div class="template-row">
	{#each templates as template (template.id)}
		<button class="tpill" type="button">
			<i class={template.icon}></i>
			{template.label}
		</button>
	{/each}
</div>

