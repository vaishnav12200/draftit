<script>
	import ProgressBar from "$lib/components/ui/ProgressBar.svelte";

	let { project } = $props();
	const accentClass = $derived(() => (project?.accent ? `card-${project.accent}` : ""));
	const accentTone = $derived(() => project?.accent || "orange");
</script>

<article class={`project-card ${accentClass}`.trim()}>
	<div class="card-genre">{project.genre}</div>
	<div class="card-title">{project.title}</div>
	<div class="card-meta">Last edited {project.lastEdited}</div>
	<ProgressBar value={project.progress} tone={accentTone} />
	<div class="card-stats">
		<span class="card-stat"><b>{project.scenes}</b> scenes</span>
		<span class="card-stat"><b>{project.pages}</b> pages</span>
		<span class="card-stat"><b>{project.characters}</b> chars</span>
	</div>
</article>

