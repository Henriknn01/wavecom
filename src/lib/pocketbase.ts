// import
import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';

// create connection to backend
export const pb = new PocketBase('http://192.168.0.112:8090');

// set currentUser to be the currently authenticated user
export const currentUser = writable(pb.authStore.model);

export function createInstance() {
    return new PocketBase('http://192.168.0.112:8090');
}

// lgos
pb.authStore.onChange((auth) => {
    console.log('authStore changed', auth);
    currentUser.set(pb.authStore.model);
    document.cookie = pb.authStore.exportToCookie({ httpOnly: false });
})
