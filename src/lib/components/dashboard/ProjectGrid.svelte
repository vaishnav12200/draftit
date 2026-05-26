<script>
	import ProjectCard from "$lib/components/dashboard/ProjectCard.svelte";

	let { projects = [], showNewCard = true } = $props();
</script>

<div class="project-grid">
	{#each projects as project (project.id)}
		<ProjectCard {project} />
	{/each}
	{#if showNewCard}
		<button class="new-card" type="button">
			<div class="new-card-icon"><i class="ti ti-plus"></i></div>
			<span>New Script</span>
		</button>
	{/if}
</div>

