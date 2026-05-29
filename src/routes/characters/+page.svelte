<script>
  import { characters } from '$lib/stores/characters';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let list = [];
  let name = '';
  let role = '';
  let color = '#8b3a3a';

  const unsubscribe = characters.subscribe(v => list = v);

  onMount(() => {
    return () => unsubscribe();
  });

  function create() {
    if (!name.trim()) return;
    const id = characters.add({ name: name.trim(), role: role || 'Supporting', color, appears: 0, notes: '', traits: [] });
    name = '';
    role = '';
    goto(`/characters/${id}`);
  }
</script>

<div style="padding:28px">
  <h1 style="font-family:var(--serif);font-size:22px">Characters</h1>
  <div style="margin-top:12px;display:flex;gap:8px;align-items:center">
    <input placeholder="Name" bind:value={name} />
    <input placeholder="Role" bind:value={role} />
    <input type="color" bind:value={color} />
    <button on:click={create} class="btn-primary">Create</button>
  </div>

  <div style="margin-top:20px;display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px">
    {#each list as c}
      <div class="char-card" on:click={() => goto(`/characters/${c.id}`)} style="padding:12px;border:1px solid var(--border);background:var(--bg2);border-radius:10px;cursor:pointer">
        <div style="display:flex;align-items:center;gap:10px">
          <div style="width:44px;height:44px;border-radius:50%;background:{c.color};display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700">{c.name.slice(0,2).toUpperCase()}</div>
          <div>
            <div style="font-weight:600">{c.name}</div>
            <div style="font-size:12px;color:var(--text3)">{c.role}</div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  input{padding:8px;border-radius:8px;border:1px solid var(--border);background:var(--bg3);color:var(--text);}
  .btn-primary{background:var(--orange);color:#fff;border:none;border-radius:8px;padding:8px 12px}
</style>
