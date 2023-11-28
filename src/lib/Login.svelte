<script lang="ts">
import { currentUser, pb } from "$lib/pocketbase";
import {goto} from "$app/navigation";

// create variables
let username: string;
let password: string;

// login function
async function login() {
    await pb.collection('users').authWithPassword(username, password);
}

// sign out function
function signOut() {
    pb.authStore.clear();
}

// go to signup page
function goSignUp() {
    goto("/auth/signup");
}

</script>

<!-- conditional render based on user authentication -->
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
            <button on:click={login} type="submit" class="p-2 bg-sky-600 text-white rounded-md flex-1">Login</button>
            <button on:click={goSignUp} class="border p-2 border-blue-700 rounded-md wid flex-1">Sign Up</button>
        </div>
    </form>
{/if}
