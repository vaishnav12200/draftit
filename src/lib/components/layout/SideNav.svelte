<script>
	import { goto } from "$app/navigation";

	let { active = "dashboard" } = $props();

	const navItems = [
		{ id: "landing", label: "Home", icon: "ti ti-home", href: "/" },
		{ id: "dashboard", label: "Projects", icon: "ti ti-layout-dashboard", href: "/dashboard" },
		{ id: "workspace", label: "Write", icon: "ti ti-pencil", href: "/workspace/1" },
		{ id: "scene-board", label: "Scene Board", icon: "ti ti-layout-board", href: "/workspace/1/board" },
		{ id: "characters", label: "Characters", icon: "ti ti-users", href: "/characters/1" }
	];

	const closeNav = () => {
		if (typeof document === "undefined") return;
		document.body.classList.remove("nav-open");
	};

	const handleNav = (href) => {
		closeNav();
		goto(href);
	};
</script>

<nav class="main-nav" aria-label="Primary">
	<div class="nav-header">
		<div class="nav-logo-icon">D</div>
		<span class="nav-logo-text">DraftIt</span>
	</div>
	<div class="nav-section-label">Menu</div>
	{#each navItems as item}
		<button
			class={`nav-btn ${item.id === active ? "active" : ""}`}
			type="button"
			on:click={() => handleNav(item.href)}
		>
			<i class={item.icon}></i>
			{item.label}
		</button>
	{/each}
	<div class="nav-footer">
		<div class="nav-avatar">AR</div>
		<div>
			<div class="nav-user-name">Arjun</div>
			<div class="nav-user-plan">Free Plan</div>
		</div>
	</div>
</nav>

