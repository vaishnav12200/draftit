<svelte:head>
	<title>DraftIt -- Create Account</title>
</svelte:head>

<script>
	import { goto } from '$app/navigation';

	let fullName = 'Arjun Verma';
	let email = '';
	let password = '';
	let confirmPassword = '';
	let workspaceName = 'The Drug Universe';
	let role = 'Writer';
	let agreeTerms = true;

	function createAccount() {
		goto('/dashboard');
	}
</script>

<div class="create-shell">
	<div class="create-card">
		<div class="eyebrow">Create Account</div>
		<h1>Set up your DraftIt profile</h1>
		<p>Create your account first, then head into the dashboard to start writing.</p>

		<div class="form-grid">
			<label>
				<span>Full Name</span>
				<input bind:value={fullName} type="text" placeholder="Arjun Verma" />
			</label>
			<label>
				<span>Email</span>
				<input bind:value={email} type="email" placeholder="arjun@example.com" />
			</label>
			<label>
				<span>Password</span>
				<input bind:value={password} type="password" placeholder="••••••••" />
			</label>
			<label>
				<span>Confirm Password</span>
				<input bind:value={confirmPassword} type="password" placeholder="••••••••" />
			</label>
			<label class="full">
				<span>Workspace Name</span>
				<input bind:value={workspaceName} type="text" placeholder="The Drug Universe" />
			</label>
			<label>
				<span>Role</span>
				<select bind:value={role}>
					<option>Writer</option>
					<option>Creator</option>
					<option>Showrunner</option>
					<option>Team Member</option>
				</select>
			</label>
			<label class="full agreement">
				<input bind:checked={agreeTerms} type="checkbox" />
				<span>I agree to create an account and continue to the dashboard.</span>
			</label>
		</div>

		<div class="actions">
			<button class="ghost-btn" type="button" onclick={() => goto('/dashboard')}>Back</button>
			<button class="primary-btn" type="button" onclick={createAccount}>Create Account</button>
		</div>
	</div>

	<div class="preview-card">
		<div class="preview-label">Account Preview</div>
		<div class="preview-title">{fullName}</div>
		<div class="preview-meta">{email || 'arjun@example.com'} · {role}</div>
		<div class="preview-box">
			<div class="preview-scene">Workspace</div>
			<div class="preview-line">{workspaceName}</div>
			<div class="preview-note">Account creation will send you straight to the dashboard.</div>
		</div>
	</div>
</div>

<style>
	.create-shell {
		min-height: 100vh;
		padding: 40px 44px 120px;
		display: grid;
		grid-template-columns: minmax(0, 1.25fr) minmax(320px, 0.75fr);
		gap: 24px;
		background:
			radial-gradient(ellipse 60% 50% at 20% 10%, rgba(232, 98, 26, 0.12), transparent 55%),
			linear-gradient(180deg, #0b0b0d 0%, #09090b 100%);
	}

	.create-card,
	.preview-card {
		background: rgba(17, 17, 22, 0.92);
		border: 1px solid var(--border);
		border-radius: 20px;
		backdrop-filter: blur(12px);
		box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
	}

	.create-card {
		padding: 32px;
	}

	.eyebrow {
		font-size: 11px;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--orange2);
		margin-bottom: 12px;
	}

	h1 {
		font-family: var(--serif);
		font-size: 44px;
		font-weight: 400;
		line-height: 1.05;
		margin: 0 0 10px;
	}

	p {
		color: var(--text2);
		margin-bottom: 28px;
		line-height: 1.7;
	}

	.form-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 16px;
	}

	label {
		display: grid;
		gap: 8px;
	}

	label span,
	.preview-label {
		font-size: 11px;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--text3);
	}

	.full {
		grid-column: 1 / -1;
	}

	input,
	select,
	textarea {
		width: 100%;
		border: 1px solid var(--border);
		border-radius: 12px;
		padding: 14px 14px;
		background: var(--bg3);
		color: var(--text);
		font: inherit;
		outline: none;
		transition: border-color 0.18s ease, background 0.18s ease;
	}

	input:focus,
	select:focus,
	textarea:focus {
		border-color: var(--orange3);
		background: var(--bg4);
	}

	.actions {
		display: flex;
		justify-content: flex-end;
		gap: 12px;
		margin-top: 22px;
	}

	.ghost-btn,
	.primary-btn {
		border-radius: 12px;
		padding: 14px 18px;
		border: 1px solid var(--border);
		cursor: pointer;
		font-weight: 500;
	}

	.ghost-btn {
		background: transparent;
		color: var(--text2);
	}

	.primary-btn {
		background: var(--orange);
		border-color: transparent;
		color: #fff;
	}

	.preview-card {
		padding: 28px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.preview-title {
		font-family: var(--serif);
		font-size: 30px;
		margin-top: 4px;
	}

	.preview-meta {
		color: var(--text3);
		margin-top: 6px;
	}

	.preview-box {
		margin-top: 18px;
		padding: 18px;
		border-radius: 16px;
		border: 1px solid var(--border);
		background: linear-gradient(180deg, var(--bg2), var(--bg3));
	}

	.preview-scene {
		font-family: var(--mono);
		font-size: 13px;
		margin-bottom: 12px;
	}

	.preview-line {
		color: var(--text2);
		line-height: 1.7;
	}

	.preview-note {
		margin-top: 10px;
		color: var(--text3);
		font-size: 12px;
		line-height: 1.6;
	}

	.agreement {
		grid-template-columns: auto 1fr;
		align-items: center;
		gap: 10px;
	}

	.agreement input {
		width: 16px;
		height: 16px;
		padding: 0;
		accent-color: var(--orange);
	}

	.agreement span {
		letter-spacing: 0;
		text-transform: none;
		font-size: 13px;
		color: var(--text2);
	}

	@media (max-width: 900px) {
		.create-shell {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 640px) {
		.create-shell {
			padding: 24px 18px 80px;
		}

		.create-card,
		.preview-card {
			padding: 20px;
		}

		h1 {
			font-size: 34px;
		}

		.form-grid {
			grid-template-columns: 1fr;
		}
	}
</style>