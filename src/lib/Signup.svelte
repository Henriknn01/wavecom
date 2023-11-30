<!--
This component is responsible for user signup and authentication in the application.

It begins with importing necessary modules. The 'currentUser' and 'pb' (pocketbase instance) from the "$lib/pocketbase", and 'goto' from
"$app/navigation" modules.

Following the imports, different variables for user information including 'name', 'username', 'email', 'password', 'passwordConfirm'
are defined. Further, 'err' is defined to store errors.

Three primary functions are featured in this script/component:

1. 'login': This function is designed to log the user in using the 'authWithPassword' method of the 'users' collection from the
   pocketbase instance ('pb'). After successful login, it redirects the user to the '/servers' page using the 'goto' function.

2. 'signUp': The function aims to sign up a new user. It starts by defining an object 'data' with user details. Then it creates
   a new user using the 'create' method of the 'users' collection and requests verification with the provided email.
   Upon successful creation, the function automatically authenticates the user by invoking the 'login' function.
   All the above steps are encapsulated within a try-catch block to catch and assign any errors that might arise during execution to 'err'.

3. 'signOut': This function clears the authentication store to log out the user.

4. 'cancel': This function redirects users back to the login page: '/auth/login' when invoked.

Following the script, there is Svelte conditional rendering to check if a user is currently logged in. Depending upon the
loggedIn status, it renders different HTML to the DOM.
-->
<script lang="ts">
import { currentUser, pb } from "$lib/pocketbase";
import {goto} from "$app/navigation";

// variable setup
let name: string;
let username: string;
let email: string;
let password: string;
let passwordConfirm: string;
let err:any = null;

// login function
async function login() {
    await pb.collection('users').authWithPassword(username, password);
    await goto('/servers');
}

// signup function
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
        await pb.collection('users').requestVerification(email);
        await login();
    } catch (e) {
        err = e.data;
    }
}

// signout function
function signOut() {
    pb.authStore.clear();
}

// cancel function - redirects user to login screen.
function cancel() {
    goto('/auth/login');
}

</script>

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
    <p><i><small class="text-red-600">*</small> Required fields</i></p>
    <form on:submit|preventDefault class="space-y-2">
        <div class="flex flex-col w-full space-y-4">
            <label for="name">Name</label>
            <input id="name" class="p-4" placeholder="Name" type="text" bind:value={name}>
            <label for="username">Username</label>
            <input id="username" class="p-4" placeholder="Username" type="text" bind:value={username}>
            <label for="email">Email <small class="text-red-600">*</small></label>
            <input id="email" class="p-4" placeholder="Email" type="email" bind:value={email}>
            <label for="password">Password <small class="text-red-600">*</small></label>
            <input id="password" class="p-4" placeholder="Password" type="password" bind:value={password}>
            <label for="passwordConfirm">Confirm Password <small class="text-red-600">*</small></label>
            <input id="passwordConfirm" class="p-4" placeholder="Confirm Password" type="password" bind:value={passwordConfirm}>
        </div>
        <div class="flex w-full space-x-4 font-semibold">
            <button on:click={signUp} class="p-2 bg-sky-600 text-white rounded-md flex-1">Sign Up</button>
            <button on:click={cancel} class="p-2 bg-gray-300 rounded-md flex-1">Cancel</button>
        </div>
    </form>
{/if}
