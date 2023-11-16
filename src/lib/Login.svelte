<script lang="ts">
import { currentUser, pb } from "$lib/pocketbase";

let username: string;
let password: string;

async function login() {
    await pb.collection('users').authWithPassword(username, password);
}

async function signUp() {
    try {
        const data = {
            "username": username,
            "password": password,
            "passwordConfirm": password,
            "name": "test"
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

</script>

{#if $currentUser}
    <p>
        Signed in as {$currentUser.username}
        <button on:click={signOut}>Sign Out</button>
    </p>
{:else}
    <form on:submit|preventDefault class="space-y-2">
        <div class="flex flex-col w-full space-y-4">
            <label for="username">Username</label>
            <input id="username" class="p-4" placeholder="Username" type="text" bind:value={username}>
            <label for="password">Password</label>
            <input id="password" class="p-4" placeholder="Password" type="password" bind:value={password}>
        </div>
        <div class="flex w-full space-x-4 font-semibold">
            <button on:click={signUp} class="border p-2	border-blue-700 rounded-md wid flex-1">Sign Up</button>
            <button on:click={login} class="flex-1 p-2">Login</button>
        </div>
    </form>
{/if}
