import { writable } from 'svelte/store';

function createCharactersStore() {
	const localKey = 'sp.characters.v1';
	const initial = [
		{ id: '1', name: 'Arjun', role: 'Protagonist', color: '#8b3a3a', appears: 34, notes: 'Eyes that have forgotten how to sleep', traits: ['Methodical','Haunted','Loyal'] },
		{ id: '2', name: 'Reza', role: 'Antagonist', color: '#3a5a8b', appears: 28, notes: 'Calm, dangerous', traits: ['Patient','Ruthless'] }
	];

	const stored = typeof localStorage !== 'undefined' ? localStorage.getItem(localKey) : null;
	const start = stored ? JSON.parse(stored) : initial;

	const { subscribe, set, update } = writable(start);

	subscribe(vals => {
		if (typeof localStorage !== 'undefined') localStorage.setItem(localKey, JSON.stringify(vals));
	});

	function add(character) {
		const id = Date.now().toString();
		const item = { id, ...character };
		update(list => [item, ...list]);
		return id;
	}

	function remove(id) {
		update(list => list.filter(c => c.id !== id));
	}

	function updateCharacter(id, patch) {
		update(list => list.map(c => c.id === id ? { ...c, ...patch } : c));
	}

	return { subscribe, set, add, remove, updateCharacter };
}

export const characters = createCharactersStore();


