<script lang="ts">
    import { ArrowLongLeft } from "svelte-heros-v2";
    import { pb } from "$lib/pocketbase";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    export let data;

    let inputField: any;
    let newServerName: string = "";
    let server:any = [];

    onMount(async () => {
        const serverResult = await pb.collection("servers").getOne(data.id, {});
        console.log(data.id)
    });

    async function renameServer() {
        const updatedData = {
            name: newServerName,
        };
        await pb.collection("servers").update(data.id, updatedData);
        inputField = "";
        await goto("/servers/" + data.id + "/channels");
    }
</script>

<div class="text-center border-b border-gray-300 pb-2 flex">
    <a href="/servers/{data.id}/channels">
        <ArrowLongLeft></ArrowLongLeft>
    </a>
    <div class="text-center flex-1 pr-4">
        <h1 class="text-xl font-semibold">Change server name</h1>
    </div>
</div>

<form on:submit|preventDefault={renameServer} class="flex-col space-y-4">
    <input
        id="message"
        bind:this={inputField}
        placeholder="New server name"
        type="text"
        bind:value={newServerName}
        class="flex-1 p-2 bg-gray-300 rounded-lg w-full"
    />
    <button type="submit" class="w-full p-2 bg-green-300 rounded-lg"
        >Rename Server</button
    >
</form>
