<script>
  import { characters } from '$lib/stores/characters';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  let id;
  let character = null;

  const unsubPage = page.subscribe(p => id = p.params.id);

  const unsub = characters.subscribe(list => {
    character = list.find(c => c.id === id) || null;
  });

  onMount(() => {
    return () => { unsub(); unsubPage(); };
  });
</script>

{#if character}
  <div style="padding:28px">
    <div style="display:flex;gap:16px;align-items:center">
      <div style="width:92px;height:92px;border-radius:50%;background:{character.color};display:flex;align-items:center;justify-content:center;color:#fff;font-size:28px;font-weight:700">{character.name.slice(0,2).toUpperCase()}</div>
      <div>
        <h1 style="font-family:var(--serif);margin:0">{character.name}</h1>
        <div style="color:var(--text3)">{character.role} · Appears in {character.appears} scenes</div>
      </div>
    </div>

    <div style="margin-top:18px">
      <div style="font-weight:600;margin-bottom:6px">Description</div>
      <div style="color:var(--text2)">{character.notes || 'No description yet.'}</div>
    </div>

    <div style="margin-top:18px">
      <div style="font-weight:600;margin-bottom:6px">Traits</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        {#each character.traits as t}
          <div style="background:var(--bg3);padding:6px 10px;border-radius:999px;color:var(--text2)">{t}</div>
        {/each}
      </div>
    </div>
  </div>
{:else}
  <div style="padding:28px">Character not found.</div>
{/if}

