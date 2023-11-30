<script lang="ts">
    import { ArrowLongLeft } from "svelte-heros-v2";
    import { pb, currentUser } from "$lib/pocketbase";
    import { goto } from "$app/navigation";

    let inputField: any;
    let newServer: string = "";

    async function createServer() {
        const formData = {
            name: newServer,
            owner: $currentUser!.id,
        };
        const record = await pb.collection("servers").create(formData);
        inputField = "";
        await goto("/servers/" + record.id + "/channels");
    }
</script>

<div class="text-center border-b border-gray-300 pb-2 flex">
    <a href="/servers">
        <ArrowLongLeft></ArrowLongLeft>
    </a>
    <div class="text-center flex-1 pr-4">
        <h1 class="text-xl font-semibold">Create new server</h1>
    </div>
</div>

<form on:submit|preventDefault={createServer} class="flex-col space-y-4">
    <input
        id="message"
        bind:this={inputField}
        placeholder="Server name"
        type="text"
        bind:value={newServer}
        class="flex-1 p-2 bg-gray-300 rounded-lg w-full"
    />
    <button type="submit" class="w-full p-2 bg-green-300 rounded-lg"
        >Create Server</button
    >
</form>
