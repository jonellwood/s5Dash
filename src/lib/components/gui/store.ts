/* eslint-disable @typescript-eslint/no-explicit-any */
import { writable } from 'svelte/store';

export function guiControls(values: any) {
	return writable(values);
}
