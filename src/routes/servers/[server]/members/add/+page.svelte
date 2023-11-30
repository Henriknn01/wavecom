<script lang="ts">
import { UserPlus, ArrowLongLeft, ArrowRightOnRectangle } from 'svelte-heros-v2';
import {pb} from "$lib/pocketbase";
import {onMount} from "svelte";

export let data;

let searchUsername: string = "";
let users: any = [];
let server: any = [];


onMount(async () => {
    const usersList = await pb.collection('users').getList(1, 50, {
        filter: pb.filter("username ~ {:username}", {username: searchUsername}),
    });
    const serverResult = await pb.collection("servers").getOne(data.id, {
        expand: "members",
    });
    server = serverResult;
    const arr1 = usersList.items;
    const arr2 = server.expand.members;
    let res = arr1.filter(x => !arr2.find(o => o.id === x.id));
    users = res;
});

async function search() {
    const usersList = await pb.collection('users').getList(1, 50, {
        filter: pb.filter("username ~ {:username}", {username: searchUsername}),
    });
    const serverResult = await pb.collection("servers").getOne(data.id, {
        expand: "members",
    });
    server = serverResult;
    const arr1 = usersList.items;
    const arr2 = server.expand.members;
    let res = arr1.filter(x => !arr2.find(o => o.id === x.id));
    users = res;
}

async function addUser(userId: string) {
    server.members.push(userId);
    const updatedData = {
        members: server.members,
    };
    await pb.collection("servers").update(data.id, updatedData);
    await search();
}

</script>

<div class="flex space-x-4 space-y-2 border-b border-gray-300 pb-2">
    <a href="/servers/{data.id}/members" class="my-auto">
        <ArrowLongLeft></ArrowLongLeft>
    </a>
    <h1 class="text-2xl font-bold flex-1">Add new member</h1>
</div>

<form on:submit|preventDefault={search} class="flex-col space-y-4">
    <input id="message" placeholder="Username" type="text" bind:value={searchUsername} class="flex-1 p-2 bg-gray-300 rounded-lg w-full">
    <button type="submit" class="w-full p-2 bg-green-300 rounded-lg">Search</button>
</form>

<div class="flex border-b border-gray-300 pb-2">
    <h1 class="text-xl flex-1">Users</h1>
</div>
<div class="space-y-4 divide-y divide-gray-300">
    {#if users != null}
        {#each users as member (member.id)}
            <div class="grid grid-cols-3 space-x-4 pt-2.5">
                <p class="my-auto font-light">{member.id}</p>
                <p class="my-auto font-semibold">{member.username}</p>
                <button class="text-green-500 my-auto" on:click={() => addUser(member.id)}>
                    <UserPlus class="float-right"></UserPlus>
                </button>
            </div>
        {/each}
    {/if}
</div>
