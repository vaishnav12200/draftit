<svelte:head>
	<title>DraftIt -- Dashboard</title>
</svelte:head>

<script>
	import Topbar from "$lib/components/layout/Topbar.svelte";
	import NavOverlay from "$lib/components/layout/NavOverlay.svelte";
	import SideNav from "$lib/components/layout/SideNav.svelte";
	import IconBtn from "$lib/components/ui/IconBtn.svelte";
	import { goto } from '$app/navigation';
	import Avatar from "$lib/components/ui/Avatar.svelte";
	import ProjectGrid from "$lib/components/dashboard/ProjectGrid.svelte";
	import ContinueStrip from "$lib/components/dashboard/ContinueStrip.svelte";
	import TemplateRow from "$lib/components/dashboard/TemplateRow.svelte";

	const projects = [
		{
			id: "drug-universe",
			genre: "Crime Drama",
			title: "The Drug Universe",
			lastEdited: "2h ago",
			progress: 68,
			scenes: 47,
			pages: 89,
			characters: 12,
			accent: "orange"
		},
		{
			id: "empty-corridors",
			genre: "Thriller",
			title: "Empty Corridors",
			lastEdited: "yesterday",
			progress: 34,
			scenes: 22,
			pages: 41,
			characters: 5,
			accent: "gold"
		},
		{
			id: "before-signal",
			genre: "Short Film",
			title: "Before the Signal",
			lastEdited: "3 days ago",
			progress: 91,
			scenes: 14,
			pages: 18,
			characters: 3,
			accent: "blue"
		}
	];

	const templates = [
		{ id: "feature", label: "Feature Film", icon: "ti ti-movie" },
		{ id: "short", label: "Short Film", icon: "ti ti-clock" },
		{ id: "web", label: "Web Series", icon: "ti ti-device-tv" },
		{ id: "one-location", label: "One-Location Thriller", icon: "ti ti-home" },
		{ id: "anthology", label: "Anthology Episode", icon: "ti ti-sparkles" }
	];
</script>

<div id="dashboard">
	<NavOverlay />
	<SideNav active="dashboard" />
	<Topbar>
		<div slot="center" class="search-bar">
			<i class="ti ti-search" style="color: var(--text3); font-size: 14px"></i>
			<input type="text" placeholder="Search scripts, scenes, characters..." />
		</div>
		<div slot="actions">
			<IconBtn label="Notifications"><i class="ti ti-bell"></i></IconBtn>
			<IconBtn label="Settings" on:click={() => goto('/settings')}><i class="ti ti-settings"></i></IconBtn>
			<Avatar initials="AR" label="Arjun" />
		</div>
	</Topbar>

	<div class="dash-body">
		<div class="dash-greeting">Good evening, Arjun.</div>
		<div class="dash-date">Friday, 23 May 2026 - 3 scripts in progress</div>

		<div class="sec-header">
			<span class="sec-title">Recent Projects</span>
			<span class="sec-count">4 scripts</span>
			<span class="sec-link">View all -></span>
		</div>
		<ProjectGrid {projects} />

		<div class="sec-header"><span class="sec-title">Quick Continue</span></div>
		<ContinueStrip
			title="Continue Scene 06 -- Factory Confrontation"
			subtitle={"The Drug Universe - Last line: \"She said you'd still be here.\""}
		/>

		<div class="sec-header"><span class="sec-title">Templates</span></div>
		<TemplateRow {templates} />
	</div>
</div>

