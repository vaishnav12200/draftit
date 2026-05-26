<script>
	import { createEventDispatcher } from "svelte";
	import ScreenplayPage from "./ScreenplayPage.svelte";

	const locationOptions = ["INT.", "EXT.", "INT./EXT."];
	const timeOptions = ["DAY", "NIGHT", "DAWN", "DUSK", "CONTINUOUS"];

	let locationType = $state("INT.");
	let locationName = $state("");
	let timeOfDay = $state("NIGHT");
	let charactersInput = $state("");
	let whatHappens = $state("");
	let conflict = $state("");
	let includeDialogue = $state(false);
	let dialogueSpeaker = $state("");
	let dialogueLine = $state("");
	let blocks = $state([]);

	const dispatch = createEventDispatcher();

	const characters = $derived(() => parseCharacters(charactersInput));

	$effect(() => {
		if (includeDialogue && !dialogueSpeaker && characters.length > 0) {
			dialogueSpeaker = characters[0];
		}
	});

	function parseCharacters(value) {
		return value
			.split(",")
			.map((item) => item.trim())
			.filter(Boolean);
	}

	function makeId() {
		return `blk_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
	}

	function buildHeading() {
		const place = locationName.trim();
		if (!place) return "";
		return `${locationType} ${place.toUpperCase()} -- ${timeOfDay}`;
	}

	function buildBlocks() {
		const nextBlocks = [];
		const heading = buildHeading();

		if (heading) {
			nextBlocks.push({ id: makeId(), type: "scene-heading", content: heading });
		}

		const actionText = whatHappens.trim();
		if (actionText) {
			nextBlocks.push({ id: makeId(), type: "action", content: actionText });
		}

		const conflictText = conflict.trim();
		if (conflictText) {
			nextBlocks.push({ id: makeId(), type: "action", content: conflictText });
		}

		if (includeDialogue) {
			const speaker = (dialogueSpeaker || characters[0] || "CHARACTER").toUpperCase();
			const line = dialogueLine.trim() || "Add dialogue here.";
			nextBlocks.push({ id: makeId(), type: "character", content: speaker });
			nextBlocks.push({ id: makeId(), type: "dialogue", content: line });
		}

		return nextBlocks;
	}

	function handleSubmit() {
		const nextBlocks = buildBlocks();
		blocks = nextBlocks;
		if (nextBlocks.length > 0) {
			dispatch("generate", { blocks: nextBlocks });
		}
	}

	function resetForm() {
		locationType = "INT.";
		locationName = "";
		timeOfDay = "NIGHT";
		charactersInput = "";
		whatHappens = "";
		conflict = "";
		includeDialogue = false;
		dialogueSpeaker = "";
		dialogueLine = "";
		blocks = [];
	}
</script>

<div class="guided-builder">
	<div class="gb-card">
		<div class="gb-header">
			<div>
				<h2>Guided Scene Builder</h2>
				<p>Build a scene step by step and generate screenplay blocks.</p>
			</div>
		</div>

		<form class="gb-form" on:submit|preventDefault={handleSubmit}>
			<div class="gb-row">
				<div class="gb-field">
					<label for="locationType">Location type</label>
					<select id="locationType" bind:value={locationType}>
						{#each locationOptions as option}
							<option value={option}>{option}</option>
						{/each}
					</select>
				</div>
				<div class="gb-field">
					<label for="timeOfDay">Time of day</label>
					<select id="timeOfDay" bind:value={timeOfDay}>
						{#each timeOptions as option}
							<option value={option}>{option}</option>
						{/each}
					</select>
				</div>
			</div>

			<div class="gb-field">
				<label for="locationName">Place name</label>
				<input
					id="locationName"
					type="text"
					placeholder="Abandoned factory"
					bind:value={locationName}
					required
				/>
			</div>

			<div class="gb-field">
				<label for="characters">Characters present</label>
				<input
					id="characters"
					type="text"
					placeholder="Arjun, Reza"
					bind:value={charactersInput}
				/>
				{#if characters.length > 0}
					<div class="gb-chips">
						{#each characters as character}
							<span class="gb-chip">{character}</span>
						{/each}
					</div>
				{/if}
			</div>

			<div class="gb-field">
				<label for="whatHappens">What happens</label>
				<textarea
					id="whatHappens"
					placeholder="Describe the action in one or two lines."
					bind:value={whatHappens}
					required
				></textarea>
			</div>

			<div class="gb-field">
				<label for="conflict">Conflict or tension</label>
				<textarea
					id="conflict"
					placeholder="What raises the stakes in this moment?"
					bind:value={conflict}
				></textarea>
			</div>

			<div class="gb-field">
				<label>Dialogue</label>
				<div class="gb-toggle">
					<button
						type="button"
						class:active={includeDialogue}
						on:click={() => (includeDialogue = true)}
					>
						Yes
					</button>
					<button
						type="button"
						class:active={!includeDialogue}
						on:click={() => (includeDialogue = false)}
					>
						No
					</button>
				</div>
			</div>

			{#if includeDialogue}
				<div class="gb-field">
					<label for="dialogueSpeaker">Speaker</label>
					<input
						id="dialogueSpeaker"
						type="text"
						placeholder="ARJUN"
						bind:value={dialogueSpeaker}
					/>
				</div>
				<div class="gb-field">
					<label for="dialogueLine">Line</label>
					<textarea
						id="dialogueLine"
						placeholder="Write one line of dialogue."
						bind:value={dialogueLine}
					></textarea>
				</div>
			{/if}

			<div class="gb-actions">
				<button class="gb-btn" type="submit">Generate scene</button>
				<button class="gb-btn ghost" type="button" on:click={resetForm}>Reset</button>
			</div>
		</form>
	</div>

	<div class="gb-card">
		<div class="gb-header">
			<div>
				<h3>Generated preview</h3>
				<p>Review the screenplay blocks before adding them to a scene.</p>
			</div>
		</div>
		<ScreenplayPage {blocks} emptyLabel="Fill the form and generate a scene." />
	</div>
</div>

<style>
	.guided-builder {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: 24px;
	}

	.gb-card {
		background: var(--bg2);
		border: 1px solid var(--border);
		border-radius: 14px;
		padding: 22px;
		display: flex;
		flex-direction: column;
		gap: 18px;
	}

	.gb-header h2,
	.gb-header h3 {
		font-family: var(--serif);
		font-weight: 400;
		color: var(--text);
		margin-bottom: 6px;
	}

	.gb-header p {
		color: var(--text3);
		font-size: 12px;
		line-height: 1.6;
	}

	.gb-form {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.gb-row {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 12px;
	}

	.gb-field {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	label {
		font-size: 11px;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: var(--text3);
	}

	input,
	select,
	textarea {
		background: var(--bg3);
		border: 1px solid var(--border);
		border-radius: 8px;
		padding: 10px 12px;
		color: var(--text);
		font-size: 13px;
		font-family: var(--sans);
		transition: border-color 0.18s ease, box-shadow 0.18s ease;
	}

	input::placeholder,
	textarea::placeholder {
		color: var(--text3);
	}

	input:focus,
	select:focus,
	textarea:focus {
		outline: none;
		border-color: var(--orange3);
		box-shadow: 0 0 0 2px rgba(232, 98, 26, 0.15);
	}

	textarea {
		min-height: 88px;
		resize: vertical;
	}

	.gb-chips {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}

	.gb-chip {
		background: var(--bg4);
		border: 1px solid var(--border);
		border-radius: 999px;
		padding: 4px 10px;
		font-size: 11px;
		color: var(--text2);
	}

	.gb-toggle {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 8px;
	}

	.gb-toggle button {
		border: 1px solid var(--border);
		background: var(--bg3);
		color: var(--text3);
		padding: 8px 10px;
		border-radius: 8px;
		font-size: 12px;
		cursor: pointer;
		transition: all 0.18s ease;
	}

	.gb-toggle button.active {
		border-color: var(--orange3);
		color: var(--orange2);
		background: rgba(232, 98, 26, 0.08);
	}

	.gb-actions {
		display: flex;
		gap: 10px;
		margin-top: 6px;
	}

	.gb-btn {
		border: none;
		border-radius: 10px;
		padding: 10px 16px;
		background: var(--orange);
		color: #fff;
		cursor: pointer;
		font-size: 13px;
		font-weight: 500;
		transition: all 0.2s ease;
	}

	.gb-btn:hover {
		background: var(--orange2);
		transform: translateY(-1px);
	}

	.gb-btn.ghost {
		background: transparent;
		border: 1px solid var(--border);
		color: var(--text2);
	}

	.gb-btn.ghost:hover {
		border-color: var(--border2);
		color: var(--text);
		background: var(--bg3);
		transform: none;
	}

	@media (max-width: 980px) {
		.guided-builder {
			grid-template-columns: 1fr;
		}
	}
</style>

