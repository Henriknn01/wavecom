<script lang="ts">
import {ArrowLongLeft, Flag} from 'svelte-heros-v2';
import Messages from "$lib/Messages.svelte";
import { onMount, onDestroy } from "svelte";
import { currentUser, pb } from "$lib/pocketbase";

export let data;

let channel: any = [];

onMount(async () => {
    const resultList = await pb.collection('channels').getOne(data.id, {});
    channel = resultList;
});
</script>

<div class="text-center border-b border-gray-300 pb-2 flex">
    <a href="/servers/{channel.server}/channels">
        <ArrowLongLeft></ArrowLongLeft>
    </a>
    <div class="text-center flex-1">
        <h1 class="text-xl font-semibold"># {channel.name}</h1>
    </div>
    <div>
        <Flag></Flag>
    </div>
</div>
<Messages channel={data.id} />
