<script lang="ts">
// Import
import { onMount, onDestroy } from "svelte";
import { currentUser, pb } from "$lib/pocketbase";
import { PaperAirplane, Plus } from 'svelte-heros-v2';

// Create variables
export let channel: string;
let messages: any = [];
let newMessage: string;
let newImage: File;
let unsubscribe: () => void; 
let inputField:any;
let imageField:any;

// onMount runs when the page is opened
onMount(async () => {
    // fetch messages from the channel
    const resultList = await pb.collection('messages').getList(1, 50, {
        sort: 'created',
        expand: 'user',
        filter: 'channel="'+channel+'"',
    });
    messages = resultList.items;
    
    // Subscribes to the messages to load messages in realtime and set up unsubscribe function.
    unsubscribe = await pb
        .collection('messages')
        .subscribe('*', async ({action, record}) => {
            if (action === 'create') {
                const user = await pb.collection('users').getOne(record.user);
                record.expand = { user };
                messages = [...messages, record];
            }
            if (action === 'delete') {
                messages = messages.filter((m:any) => m.id !== record.id);
            }
        });
});

// unsubscribe to the messages once the page is closed
onDestroy(() => {
    unsubscribe?.();
})

// send message function
async function sendMessage() {
    let formData = new FormData();
    formData.append('text', newMessage)
    formData.append('user', $currentUser!.id)
    formData.append('channel', channel)
    if (newImage != null) {
        formData.append('image', newImage)
    }
    
    // set the data that is to be published to the server.
    const data = {
        text: newMessage,
        user: $currentUser!.id,
        channel
    }
    // send request to the backend.
    const createdMessage = await pb.collection('messages').create(data);
    inputField.value = ''; // clear the input field once the message has been sent.
    imageField.value = ''; // clear the image field once the message has been sent.
    console.log(messages)
}

</script>
<!-- Only render if user is authenticated. -->
{#if $currentUser}
<div class="messages space-y-2">
    {#each messages as message (message.id)}
        <div class="msg flex space-x-4">
            <!-- Render different chat bubble if message is sendt by other user -->
            {#if message.expand?.user?.id == $currentUser.id}
            <div class="flex-1 bg-blue-300 p-1.5 rounded-l-lg rounded-tr-lg w-full text-right">
                <small class="text-xs text-gray-800 font-light">
                     @{message.expand?.user?.username}
                </small>
                <p class="msg-text">{message.text}</p>
                {#if message.hasImage == true}
                    <img src={`http://192.168.1.116:8090/api/files/messages/${message.id}/${message.image}`} alt="userImage" width="300" height="300" style="float: right"/>
                {/if}
            </div>
            <img class="avatar flex-0 rounded-full h-8 w-8 border border-pink-600 my-4" src={`https://api.dicebear.com/7.x/notionists-neutral/svg?seed=${message.expand?.user?.username}`} alt="avatar" width="30px" height="30"/>
            {:else}
            <img class="avatar flex-0 rounded-full h-8 w-8 border border-blue-600 my-4" src={`https://api.dicebear.com/7.x/notionists-neutral/svg?seed=${message.expand?.user?.username}`} alt="avatar" width="30px"/>
            <div class="flex-1 bg-gray-300 p-1.5 rounded-r-lg rounded-tl-lg w-full">
                <small class="text-xs">
                    @{message.expand?.user?.username}
                </small>
                <p class="msg-text">{message.text}</p>
                {#if message.hasImage == true}
                <img src={`http://192.168.1.116:8090/api/files/messages/${message.id}/${message.image}`} alt="userImage" width="300" height="300"/>
                {/if}
            </div>
            {/if}
        </div>
    {/each}
</div>
<!-- Input form -->
<form on:submit|preventDefault={sendMessage} class="fixed space-x-4 inset-x-0 bottom-0 h-fit flex p-4 border-t border-gray-300">
    <input id="image"  bind:this={imageField} accept=".png, .jpg, .jpeg" type="file" bind:value={newImage}/>
    <input id="message" bind:this={inputField} placeholder="Message" type="text" bind:value={newMessage} class="flex-1 p-2 bg-gray-300 rounded-lg">
    <button type="submit" class="flex-0 p-2 bg-green-300 rounded-lg"><PaperAirplane> </PaperAirplane></button>
</form>
{/if}
