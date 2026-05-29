<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let id = '';

	onMount(() => {
		const unsub = page.subscribe(p => {
			id = p.params.id;
			document.title = `Scene Board — Workspace ${id}`;
		});
		return unsub;
	});
</script>

<div class="topbar">
	<div class="logo"><div class="logo-icon">D</div><span class="logo-text">DraftIt</span></div>
	<span class="page-label">Scene Board — The Drug Universe</span>
	<div class="topbar-right">
		<div class="icon-btn"><i class="ti ti-pencil"></i></div>
		<div class="icon-btn"><i class="ti ti-download"></i></div>
		<div class="avatar">AR</div>
	</div>
</div>

<div class="board-body">
	<!-- ACT I -->
	<div class="board-col">
		<div class="act-hd">Act I — Setup</div>
		<div class="board-card" on:click={() => { /* navigate to scene */ }}>
			<div class="bc-dot" style="background:var(--orange)"></div>
			<div class="bc-num">SC 01</div>
			<div class="bc-title">Opening — The Market</div>
			<div class="bc-loc"><i class="ti ti-sun" style="font-size:11px"></i> EXT · MARKET · DAY</div>
			<div class="bc-foot">
				<div class="bc-avs"><div class="bc-av" style="background:#8b3a3a">A</div></div>
				<span class="bc-beat">Ordinary World</span>
			</div>
		</div>
		<div class="board-card" on:click={() => { }}>
			<div class="bc-dot" style="background:var(--orange)"></div>
			<div class="bc-num">SC 02</div>
			<div class="bc-title">The Deal</div>
			<div class="bc-loc"><i class="ti ti-moon" style="font-size:11px"></i> INT · WAREHOUSE · NIGHT</div>
			<div class="bc-foot">
				<div class="bc-avs">
					<div class="bc-av" style="background:#8b3a3a">A</div>
					<div class="bc-av" style="background:#3a5a8b">R</div>
				</div>
				<span class="bc-beat">Inciting Incident</span>
			</div>
		</div>
		<div class="board-card" on:click={() => { }}>
			<div class="bc-dot" style="background:var(--gold)"></div>
			<div class="bc-num">SC 03</div>
			<div class="bc-title">Family Dinner</div>
			<div class="bc-loc"><i class="ti ti-sunset" style="font-size:11px"></i> INT · HOME · EVENING</div>
			<div class="bc-foot">
				<div class="bc-avs">
					<div class="bc-av" style="background:#8b3a3a">A</div>
					<div class="bc-av" style="background:#4a7a3a">N</div>
				</div>
				<span class="bc-beat">Character Stakes</span>
			</div>
		</div>
	</div>

	<!-- ACT II -->
	<div class="board-col">
		<div class="act-hd">Act II — Confrontation</div>
		<div class="board-card" on:click={() => { }}>
			<div class="bc-dot" style="background:var(--blue)"></div>
			<div class="bc-num">SC 04</div>
			<div class="bc-title">The Warehouse</div>
			<div class="bc-loc"><i class="ti ti-moon" style="font-size:11px"></i> INT · WAREHOUSE · NIGHT</div>
			<div class="bc-foot">
				<div class="bc-avs">
					<div class="bc-av" style="background:#8b3a3a">A</div>
					<div class="bc-av" style="background:#3a5a8b">R</div>
					<div class="bc-av" style="background:#8b6a3a">K</div>
				</div>
				<span class="bc-beat">Rising Action</span>
			</div>
		</div>
		<div class="board-card" on:click={() => { }}>
			<div class="bc-dot" style="background:var(--blue)"></div>
			<div class="bc-num">SC 05</div>
			<div class="bc-title">Rooftop Escape</div>
			<div class="bc-loc"><i class="ti ti-moon" style="font-size:11px"></i> EXT · ROOFTOP · NIGHT</div>
			<div class="bc-foot">
				<div class="bc-avs"><div class="bc-av" style="background:#8b3a3a">A</div></div>
				<span class="bc-beat">Tension Peak</span>
			</div>
		</div>
		<div class="board-card current" on:click={() => { }}>
			<div class="bc-dot" style="background:var(--orange)"></div>
			<div class="bc-num">SC 06 ✦ Writing Now</div>
			<div class="bc-title">Factory Confrontation</div>
			<div class="bc-loc"><i class="ti ti-moon" style="font-size:11px"></i> INT · FACTORY · NIGHT</div>
			<div class="bc-foot">
				<div class="bc-avs">
					<div class="bc-av" style="background:#8b3a3a">A</div>
					<div class="bc-av" style="background:#3a5a8b">R</div>
				</div>
				<span class="bc-beat">Midpoint Twist</span>
			</div>
		</div>
		<div class="board-card" on:click={() => { }}>
			<div class="bc-dot" style="background:var(--gold)"></div>
			<div class="bc-num">SC 07</div>
			<div class="bc-title">The Confession</div>
			<div class="bc-loc"><i class="ti ti-sun" style="font-size:11px"></i> INT · OFFICE · DAY</div>
			<div class="bc-foot">
				<div class="bc-avs">
					<div class="bc-av" style="background:#8b3a3a">A</div>
					<div class="bc-av" style="background:#4a7a3a">N</div>
				</div>
				<span class="bc-beat">Emotional Beat</span>
			</div>
		</div>
	</div>

	<!-- ACT III -->
	<div class="board-col">
		<div class="act-hd">Act III — Resolution</div>
		<div class="board-card" on:click={() => { }}>
			<div class="bc-dot" style="background:var(--red)"></div>
			<div class="bc-num">SC 08</div>
			<div class="bc-title">Rain &amp; Revelation</div>
			<div class="bc-loc"><i class="ti ti-moon" style="font-size:11px"></i> EXT · ROOFTOP · NIGHT</div>
			<div class="bc-foot">
				<div class="bc-avs">
					<div class="bc-av" style="background:#8b3a3a">A</div>
					<div class="bc-av" style="background:#3a5a8b">R</div>
				</div>
				<span class="bc-beat">Climax</span>
			</div>
		</div>
		<div class="board-card" on:click={() => { }}>
			<div class="bc-dot" style="background:var(--red)"></div>
			<div class="bc-num">SC 09</div>
			<div class="bc-title">The Trial</div>
			<div class="bc-loc"><i class="ti ti-sun" style="font-size:11px"></i> INT · COURTROOM · DAY</div>
			<div class="bc-foot">
				<div class="bc-avs">
					<div class="bc-av" style="background:#8b3a3a">A</div>
					<div class="bc-av" style="background:#3a5a8b">R</div>
					<div class="bc-av" style="background:#4a7a3a">N</div>
				</div>
				<span class="bc-beat">Falling Action</span>
			</div>
		</div>
		<div class="board-card" on:click={() => { }}>
			<div class="bc-dot" style="background:var(--gold)"></div>
			<div class="bc-num">SC 10</div>
			<div class="bc-title">Final Act</div>
			<div class="bc-loc"><i class="ti ti-sunrise" style="font-size:11px"></i> EXT · BRIDGE · DAWN</div>
			<div class="bc-foot">
				<div class="bc-avs"><div class="bc-av" style="background:#8b3a3a">A</div></div>
				<span class="bc-beat">Resolution</span>
			</div>
		</div>
	</div>
</div>

<style>
	.board-body{flex:1;overflow-x:auto;overflow-y:hidden;padding:28px 28px 120px;display:flex;gap:22px;align-items:flex-start}
	.board-col{min-width:272px;flex-shrink:0}
	.act-hd{font-size:10px;color:var(--text3);letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px;padding:0 4px;display:flex;align-items:center;gap:8px}
	.board-card{background:var(--bg2);border:1px solid var(--border);border-radius:12px;padding:14px;margin-bottom:11px;cursor:pointer;transition:all .22s;position:relative}
	.board-card:hover{border-color:var(--border2);transform:translateY(-2px);box-shadow:0 8px 28px rgba(0,0,0,.35)}
	.board-card.current{border-color:var(--orange);background:rgba(232,98,26,.04)}
	.bc-dot{width:6px;height:6px;border-radius:50%;position:absolute;top:12px;right:12px}
	.bc-num{font-size:9.5px;color:var(--text3);font-family:var(--mono);margin-bottom:5px}
	.bc-title{font-size:13px;color:var(--text);margin-bottom:4px;font-weight:500}
	.bc-loc{font-size:11px;color:var(--text3);margin-bottom:11px;display:flex;align-items:center;gap:5px}
	.bc-foot{display:flex;align-items:center;gap:7px}
	.bc-avs{display:flex}
	.bc-av{width:20px;height:20px;border-radius:50%;border:1.5px solid var(--bg2);display:flex;align-items:center;justify-content:center;font-size:8px;font-weight:700;color:#fff;margin-left:-5px}
	.bc-av:first-child{margin-left:0}
	.bc-beat{margin-left:auto;font-size:10px;color:var(--text3);background:var(--bg3);border-radius:5px;padding:2px 7px}
</style>


