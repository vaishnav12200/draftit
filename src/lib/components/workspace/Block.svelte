<script>
	let { block } = $props();
</script>

{#if block?.type === "scene-heading"}
	<div class="p-scene">{block.content}</div>
{:else if block?.type === "action"}
	<div class="p-action">{block.content}</div>
{:else if block?.type === "character"}
	<div class="p-char">{block.content}</div>
{:else if block?.type === "parenthetical"}
	<div class="p-paren">({block.content})</div>
{:else if block?.type === "dialogue"}
	<div class="p-dial">{block.content}</div>
{:else if block?.type === "transition"}
	<div class="p-trans">{block.content}</div>
{:else}
	<div class="p-action">{block?.content}</div>
{/if}

<style>
	.p-scene {
		color: var(--text);
		font-weight: 700;
		font-size: 13px;
		letter-spacing: 0.04em;
		margin: 24px 0 6px;
	}

	.p-action {
		color: var(--text2);
		margin: 4px 0 14px;
	}

	.p-char {
		margin: 16px 0 0 150px;
		color: var(--text);
		font-size: 12px;
		letter-spacing: 0.05em;
	}

	.p-paren {
		margin: 0 0 0 110px;
		color: var(--text3);
		font-size: 12px;
	}

	.p-dial {
		margin: 0 50px 14px 90px;
		color: var(--text2);
		font-size: 13px;
	}

	.p-trans {
		text-align: right;
		color: var(--text3);
		font-size: 12px;
		margin: 14px 0;
	}

	@media (max-width: 760px) {
		.p-char {
			margin-left: 100px;
		}

		.p-paren {
			margin-left: 80px;
		}

		.p-dial {
			margin-left: 60px;
			margin-right: 30px;
		}
	}
</style>

