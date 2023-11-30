<script lang="ts">
import { Plus, ArrowLongLeft, ArrowRightOnRectangle } from 'svelte-heros-v2';

let server: any = [];
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
