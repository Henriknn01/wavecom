<script lang="ts">
import { onMount } from "svelte";
import { pb } from "$lib/pocketbase";
import { ArrowLongRight } from 'svelte-heros-v2';

// set up variables
let servers: any = [];

// `onMount` lifecycle hook of Svelte which runs when the page is opened.
onMount(async () => {
    const resultList = await pb.collection('servers').getList(1, 50, {
        sort: 'created',
    });
    servers = resultList.items;
});
</script>

<!-- Server list -->
<div id="channels" class="divide-y divide-gray-300 flex flex-col space-y-2">
    {#each servers as server (server.id)}
        <a href="servers/{server.id}/channels" class="pt-2">
            <div class="flex">
                <h1 class="flex-1 text-xl">{server.name}</h1>
                <ArrowLongRight></ArrowLongRight>
            </div>
        </a>
    {/each}
</div>
