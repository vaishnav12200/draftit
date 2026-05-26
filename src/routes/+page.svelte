<svelte:head>
	<title>DraftIt — Cinematic Writing Studio</title>
</svelte:head>

<div id="landing">
	<div class="left">
		<div class="brand-row">
			<div class="brand-icon">D</div>
			<span class="brand-name">DraftIt</span>
		</div>
		<div class="tagline-small">Cinematic Writing Studio</div>
		<h1>
			Write stories<br />
			<em>visually.</em><br />
			<span>Not mechanically.</span>
		</h1>
		<p class="landing-sub">
			Format as you think. Organize as you feel. Stay lost in the story -- not the software.
		</p>
		<div class="cta-stack">
			<button class="btn-primary" type="button">
				New Script
				<i class="ti ti-arrow-right"></i>
			</button>
			<button class="btn-secondary" type="button">
				Open Draft
				<i class="ti ti-folder-open"></i>
			</button>
			<button class="btn-secondary" type="button">
				Continue Writing
				<i class="ti ti-pencil"></i>
			</button>
		</div>
	</div>
	<div class="right">
		<div class="right-label">Live Preview</div>
		<div class="screenplay-preview">
			<div class="sp-hd">INT. ABANDONED FACTORY -- NIGHT</div>
			<div class="sp-act">
				Rain hammers the corrugated roof. ARJUN steps through broken glass, torch cutting the dark.
				<span class="cursor"></span>
			</div>
			<div class="sp-ch">ARJUN</div>
			<div class="sp-pa">(barely a whisper)</div>
			<div class="sp-di">She said you'd still be here.</div>
			<div class="sp-act">A match-strike. REZA emerges from the shadows.</div>
			<div class="sp-ch">REZA</div>
			<div class="sp-di">I never left. You're the one who's been running.</div>
		</div>
		<div class="mini-cards">
			<button class="mini-card" type="button">
				<span class="mc-num">SCENE 06</span>
				<span class="mc-title">Factory Confrontation</span>
				<span class="mc-dot" style="background: var(--orange)"></span>
			</button>
			<button class="mini-card" type="button">
				<span class="mc-num">SCENE 07</span>
				<span class="mc-title">The Confession</span>
				<span class="mc-dot" style="background: var(--blue)"></span>
			</button>
			<button class="mini-card" type="button">
				<span class="mc-num">SCENE 08</span>
				<span class="mc-title">Rain and Revelation</span>
				<span class="mc-dot" style="background: var(--gold)"></span>
			</button>
		</div>
	</div>
</div>
