<script lang="ts">
import { ArrowLongLeft, Plus } from 'svelte-heros-v2';
import { currentUser, pb } from "$lib/pocketbase";
import { goto } from '$app/navigation';

export let data;
let inputField:any;
let newChannel:string = "";

async function createChannel() {
    const formData = {
        name: newChannel,
        server: data.server,
    };
    const record = await pb.collection('channels').create(formData);
    inputField = '';
    await goto('/servers/'+data.server+'/channels');
}

</script>

<div class="text-center border-b border-gray-300 pb-2 flex">
    <a href="/servers/{data.server}/channels">
        <ArrowLongLeft></ArrowLongLeft>
    </a>
    <div class="text-center flex-1 pr-4">
        <h1 class="text-xl font-semibold">Create new channel</h1>
    </div>
</div>

<form on:submit|preventDefault={createChannel} class="flex-col space-y-4">
    <input id="message" bind:this={inputField} placeholder="Channel name" type="text" bind:value={newChannel} class="flex-1 p-2 bg-gray-300 rounded-lg w-full">
    <button type="submit" class="w-full p-2 bg-green-300 rounded-lg">Create Channel</button>
</form>