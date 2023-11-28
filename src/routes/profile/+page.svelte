<script>
import { currentUser, pb } from "$lib/pocketbase";
import {goto} from "$app/navigation";
import { ArrowLongLeft } from 'svelte-heros-v2';

// signout function - clears the authStore then redirects user to the main page.
function signOut() {
    pb.authStore.clear();
    goto("/");
}

</script>

<div class="text-center border-b border-gray-300 pb-2 flex">
    <a href="/channels/">
        <ArrowLongLeft></ArrowLongLeft>
    </a>
    <div class="text-center flex-1 pr-4">
        <h1 class="text-xl font-semibold">Profile</h1>
    </div>
</div>
<div class="flex space-x-4">
    <img class="avatar border border-pink-600 rounded-full h-20 w-auto" src={`https://api.dicebear.com/7.x/notionists-neutral/svg?seed=${$currentUser?.username}`} alt="avatar" width="30px"/>
    <div class="flex flex-col flex-1">
        <p class=""><small>#{$currentUser?.id}</small></p>
        <h1 class="text-3xl font-bold">{$currentUser?.username}</h1>
    </div>
</div>
<div class="flex-col">
    <button>Edit</button>
    <button on:click={signOut} class="p-2 bg-sky-600 text-white rounded-md flex-1">Sign Out</button>
</div>
