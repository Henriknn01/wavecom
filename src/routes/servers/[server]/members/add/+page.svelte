<script lang="ts">
import { Plus, ArrowLongLeft, ArrowRightOnRectangle } from 'svelte-heros-v2';
import { onMount } from "svelte";
import { currentUser, pb } from "$lib/pocketbase";

export let data;

let server: any = [];

onMount(async () => {
    const serverResult = await pb.collection('servers').getOne(data.id, {});
    server = serverResult;
    const usersResult = await pb.collection('users').getList()
});

async function kickUser(userId:string) {
    server.members.splice(server.members.indexOf(userId), 1);
    const updatedData = {
        "members": server.members,
    }
    await pb.collection('servers').update(data.id, updatedData);
    const resultList = await pb.collection('servers').getOne(data.id, {
        expand: 'members'
    });
    server = resultList;
    members = server.expand.members;
}
</script>

<div class="flex space-x-4 space-y-2 border-b border-gray-300 pb-2">
    <a href="channels/" class="my-auto">
        <ArrowLongLeft></ArrowLongLeft>
    </a>
    <h1 class="text-2xl font-bold flex-1">{server.name}</h1>
</div>
<div class="flex border-b border-gray-300 pb-2">
    <h1 class="text-xl flex-1">Member list</h1>
    <a href="channels/create">
        <Plus></Plus>
    </a>
</div>
<div class="space-y-4 divide-y divide-gray-300">
    {#each members as member (member.id)}
    <div class="grid grid-cols-3 space-x-4 pt-2.5">
        <p class="my-auto font-light">{member.id}</p>
        <p class="my-auto font-semibold">{member.username}</p>
        <button on:click={() => kickUser(member.id)} class="text-red-500 my-auto"><ArrowRightOnRectangle class="float-right"></ArrowRightOnRectangle></button>
    </div>
    {/each}
</div>
