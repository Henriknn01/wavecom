<!--
This Svelte script import uses two functionalities from the imported modules.
The `currentUser` and `pb` modules are imported from pocketbase located in the lib directory.
The `goto` is imported from navigation feature of Svelte-app.

We define three variables here: username, password, and err.
Username and password are of type string and used to authenticate the current user with the PocketBase collection.
The error (`err`) variable is used to hold any error data that arises during the authentication process.

We have three main functions in this component:

1. `login()` - This asynchronous function authenticates the user with the PocketBase collection using the provided username and password.
   After successful authentication, the user is redirected to the /servers page.
   If an error is thrown during this process, it is caught and stored in the `err` variable.

2. `signOut()` - This function clears the authentication store, effectively signing out the current user.

3. `goSignUp()` - This function redirects the current user to the /auth/signup page if they want to create a new account.
-->
<script lang="ts">
import { currentUser, pb } from "$lib/pocketbase";
import {goto} from "$app/navigation";

// create variables
let username: string;
let password: string;

let err:any = null;

// login function
async function login() {
    try {
        await pb.collection('users').authWithPassword(username, password);
        await goto('/servers');
    } catch (e) {
        err = e.data;
    }
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
    {#if err != null}
    <div class="bg-red-500 text-white rounded-lg p-2 space-y-2">
        <p>{err.message}</p>
        <ul class="list-disc ml-6">
        {#each Object.entries(err.data) as [key, value]}
            <li><b>{key.toUpperCase()}</b> <small> - {Object.values(Object.entries(value)[1])[1]}</small></li>
        {/each}
        </ul>
    </div>
    {/if}
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
