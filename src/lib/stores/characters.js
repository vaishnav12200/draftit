import { writable } from 'svelte/store';

const LOCAL_KEY = 'sp.characters.v1';

const DEFAULT_CHARACTERS = [
	{ id: '1', name: 'Arjun', role: 'Protagonist', color: '#8b3a3a', appears: 34, notes: 'Eyes that have forgotten how to sleep', traits: ['Methodical', 'Haunted', 'Loyal'] },
	{ id: '2', name: 'Reza', role: 'Antagonist', color: '#3a5a8b', appears: 28, notes: 'Calm, dangerous', traits: ['Patient', 'Ruthless'] }
];

function safeParse(raw) {
	try {
		return JSON.parse(raw);
	} catch (e) {
		console.warn('characters store: failed to parse stored data', e);
		return null;
	}
}

function createCharactersStore() {
	const isBrowser = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

	let start = DEFAULT_CHARACTERS;
	if (isBrowser) {
		try {
			const raw = window.localStorage.getItem(LOCAL_KEY);
			const parsed = raw ? safeParse(raw) : null;
			if (Array.isArray(parsed)) start = parsed;
		} catch (e) {
			console.warn('characters store: unable to read from localStorage', e);
		}
	}

	const { subscribe, set, update } = writable(start);

	if (isBrowser) {
		subscribe(vals => {
			try {
				window.localStorage.setItem(LOCAL_KEY, JSON.stringify(vals));
			} catch (e) {
				console.warn('characters store: failed to persist to localStorage', e);
			}
		});
	}

	function add(character) {
		const id = Date.now().toString();
		const item = {
			id,
			name: (character && character.name) ? String(character.name) : 'Unnamed',
			role: (character && character.role) ? String(character.role) : '',
			color: (character && character.color) ? String(character.color) : '#777777',
			appears: (character && Number.isFinite(character.appears)) ? character.appears : 0,
			notes: (character && character.notes) ? String(character.notes) : '',
			traits: Array.isArray(character && character.traits) ? character.traits.slice() : []
		};
		update(list => [item, ...list]);
		return id;
	}

	function remove(id) {
		update(list => list.filter(c => c.id !== id));
	}

	function updateCharacter(id, patch) {
		update(list => list.map(c => (c.id === id ? { ...c, ...patch } : c)));
	}

	return { subscribe, set, add, remove, updateCharacter };
}

export const characters = createCharactersStore();


