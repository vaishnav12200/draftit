<script>
	import Block from "./Block.svelte";

	let { blocks = [], emptyLabel = "No blocks yet." } = $props();
</script>

<div class="sp-page">
	{#if blocks.length === 0}
		<div class="sp-empty">{emptyLabel}</div>
	{:else}
		{#each blocks as block (block.id)}
			<Block {block} />
		{/each}
	{/if}
</div>

<style>
	.sp-page {
		width: 100%;
		font-family: var(--mono);
		font-size: 13.5px;
		line-height: 1.88;
		color: var(--text2);
		min-height: 240px;
	}

	.sp-empty {
		color: var(--text3);
		font-size: 12px;
		padding: 12px 0;
	}
</style>

