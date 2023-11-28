<script lang="ts">
import { currentUser, pb } from "$lib/pocketbase";
import {goto} from "$app/navigation";

let name: string;
let username: string;
let email: string;
let password: string;
let passwordConfirm: string;

async function login() {
    await pb.collection('users').authWithPassword(username, password);
}

async function signUp() {
    try {
        const data = {
            "username": username,
            "email": email,
            "password": password,
            "passwordConfirm": passwordConfirm,
            "name": name
        };
        const createdUser = await pb.collection('users').create(data);
        await login();
    } catch (err) {
        console.error(err);
    }
}

function signOut() {
    pb.authStore.clear();
}

function cancel() {
    goto('/');
}

</script>

{#if $currentUser}
    <p>
        Signed in as {$currentUser.username}
        <button on:click={signOut}>Sign Out</button>
    </p>
{:else}
    <form on:submit|preventDefault class="space-y-2">
        <div class="flex flex-col w-full space-y-4">
            <label for="name">Name</label>
            <input id="name" class="p-4" placeholder="Name" type="text" bind:value={name}>
            <label for="username">Username</label>
            <input id="username" class="p-4" placeholder="Username" type="text" bind:value={username}>
            <label for="email">Email</label>
            <input id="email" class="p-4" placeholder="Email" type="email" bind:value={email}>
            <label for="password">Password</label>
            <input id="password" class="p-4" placeholder="Password" type="password" bind:value={password}>
            <label for="passwordConfirm">Confirm Password</label>
            <input id="passwordConfirm" class="p-4" placeholder="Confirm Password" type="password" bind:value={passwordConfirm}>
        </div>
        <div class="flex w-full space-x-4 font-semibold">
            <button on:click={signUp} class="p-2 bg-sky-600 text-white rounded-md flex-1">Sign Up</button>
            <button on:click={cancel} class="p-2 bg-gray-300 rounded-md flex-1">Cancel</button>
        </div>
    </form>
{/if}
