import { writable } from 'svelte/store';

export const searchDisplayAmount = writable(3);
export const searchTerm = writable('');
// export const fetchedObjects = writable({provider: 'reddit', title: 'title'})
