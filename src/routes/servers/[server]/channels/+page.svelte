<script lang="ts">
import { Plus, ArrowLongLeft, Users } from 'svelte-heros-v2';
import Channels from "$lib/Channels.svelte";
import { onMount } from "svelte";
import { currentUser, pb } from "$lib/pocketbase";

export let data;

let server: any = [];

onMount(async () => {
    const resultList = await pb.collection('servers').getOne(data.id, {});
    server = resultList;
});
</script>

<div class="flex space-x-4 space-y-2 border-b border-gray-300 pb-2">
    <a href="/" class="my-auto">
        <ArrowLongLeft></ArrowLongLeft>
    </a>
    <h1 class="text-2xl font-bold flex-1">{server.name}</h1>
    <a href="channels/create" class="my-auto">
        <Plus></Plus>
    </a>
    <a href="members/" class="my-auto">
        <Users></Users>
    </a>
</div>

<Channels server={data.id} />
