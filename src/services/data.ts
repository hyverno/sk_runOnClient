import { writable, type Writable } from "svelte/store";

export const arr: Writable<any[]> = writable([]);

export function add (e: any) {
    arr.update((n) => [...n, e]);
}

arr.subscribe((e) => console.log('CHANGE = ', e))