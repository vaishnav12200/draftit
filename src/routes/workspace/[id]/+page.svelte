<svelte:head>
	<title>DraftIt -- Guided Scene Builder</title>
</svelte:head>

<script>
	import GuidedBuilder from "$lib/components/workspace/GuidedBuilder.svelte";
</script>

<div class="workspace-shell">
	<header class="ws-header">
		<div>
			<h1>Guided Scene Builder</h1>
			<p>Generate a screenplay scene in clean, structured blocks.</p>
		</div>
	</header>

	<GuidedBuilder />
</div>

<style>
	.workspace-shell {
		min-height: 100vh;
		padding: 40px 44px 120px;
		background: var(--bg);
	}

	.ws-header {
		margin-bottom: 24px;
	}

	.ws-header h1 {
		font-family: var(--serif);
		font-size: 28px;
		font-weight: 400;
		color: var(--text);
		margin-bottom: 6px;
	}

	.ws-header p {
		color: var(--text3);
		font-size: 13px;
	}

	@media (max-width: 640px) {
		.workspace-shell {
			padding: 28px 20px 80px;
		}
	}
</style>

