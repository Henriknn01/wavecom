<script>
import { Plus, ArrowLongLeft } from 'svelte-heros-v2';
import { currentUser } from "$lib/pocketbase";
import Channels from "$lib/Channels.svelte";
</script>

<div class="flex space-x-4 space-y-2 border-b border-gray-300 pb-2">
    <a href="/" class="my-auto">
        <ArrowLongLeft></ArrowLongLeft>
    </a>
    <h1 class="text-4xl font-bold flex-1">Wavecom</h1>
    <a href="channels/create" class="my-auto">
        <Plus></Plus>
    </a>
    <a href="/profile" class="my-auto">
        <img class="avatar border border-pink-600 rounded-full" src={`https://api.dicebear.com/7.x/notionists-neutral/svg?seed=${$currentUser?.username}`} alt="avatar" width="30px"/>
    </a>
</div>

<Channels />
