// import
import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';

// create connection to backend
export const pb = new PocketBase('https://api.norheimweb.com/');

// set currentUser to be the currently authenticated user
export const currentUser = writable(pb.authStore.model);

export function createInstance() {
    return new PocketBase('https://api.norheimweb.com/');
}

pb.authStore.onChange((auth) => {
    // console.log('authStore changed', auth);
    currentUser.set(pb.authStore.model); // sets current user on authStore change
    document.cookie = pb.authStore.exportToCookie({ httpOnly: false }); // sets cookie on authStore change
})
