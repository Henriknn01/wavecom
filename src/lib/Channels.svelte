<script lang="ts">
import { onMount } from "svelte";
import { pb } from "$lib/pocketbase";
import { ArrowLongRight } from 'svelte-heros-v2';

let channels: any = [];

onMount(async () => {
    const resultList = await pb.collection('channels').getList(1, 50, {
        sort: 'created',
    });
    channels = resultList.items;
});
</script>

<div id="channels" class="divide-y divide-gray-300 flex flex-col space-y-2">
    {#each channels as channel (channel.id)}
        <a href="channels/{channel.id}" class="pt-2">
            <div class="flex">
                <h1 class="flex-1 text-xl"># {channel.name}</h1>
                <ArrowLongRight></ArrowLongRight>
            </div>
        </a>
    {/each}
</div>
