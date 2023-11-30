<!--
This is a Svelte component that is written in TypeScript (`<script lang="ts">`).

It includes Svelte's `onMount` function which executes once the component gets mounted.
The component also imports object `pb` from pocketbase library (`$lib/pocketbase`) and `ArrowLongRight` function from `svelte-heros-v2`.

The component exports a `server` variable which can receive a value from a parent component.

The `channels` variable is defined but not exported. Its value updates inside the `onMount` function.

Inside `onMount`, an async call fetches a list of 'channels' sorted by the 'created' field and filtered by the 'server' value, and assigns it to the 'channels' variable.
-->
<script lang="ts">
import { onMount } from "svelte";
import { pb } from "$lib/pocketbase";
import { ArrowLongRight } from 'svelte-heros-v2';

// variable setup
export let server: string;
let channels: any = [];

// onmount is run on component mount
onMount(async () => {
    const resultList = await pb.collection('channels').getList(1, 50, {
        sort: 'created',
        filter: 'server="'+server+'"',
    });
    channels = resultList.items;
});
</script>

<!-- List of channels -->
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
