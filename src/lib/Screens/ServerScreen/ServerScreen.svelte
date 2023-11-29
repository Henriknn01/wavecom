<script lang="ts">
    import ServerCard from "./ServerCard.svelte";
    import NavBar from "../../NavBar.svelte";
    import { onMount } from "svelte";
    import { pb } from "$lib/pocketbase";
    import { Plus } from "svelte-heros-v2";
    import { preview } from "vite";

    /*gets a list of the servers from the database*/
    let servers: any = [];

    onMount(async () => {
        const resultList = await pb.collection("servers").getList(1, 50, {
            sort: "created",
        });
        servers = resultList.items;
    });
</script>

<!-- HTML code-->

<!--
<div class = "serverCard">
    <svg xmlns="http://www.w3.org/2000/svg" height= 22px fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      serverName;
</div>
-->

<div class="Box">
    <div class="NavigationTop">
        <span class="headline">Servers</span>
        <!--<img class ="server-img" src={ServerCard.serverImg} alt="serverImage">
            -->

        <button type="button" class="btn" title="AddNewServer">
            <Plus></Plus>
        </button>
    </div>

    <!--Displays a list of servers-->
    <!--Uses ServerCard.svelte as a component to display servername and brief description-->
    <div class="ServerList">
        <ol>
            <li><ServerCard></ServerCard></li>
            <li><ServerCard></ServerCard></li>
            <li><ServerCard /></li>
            <li><ServerCard /></li>
            <li><ServerCard /></li>
            <li><ServerCard /></li>
            <li><ServerCard /></li>
            <li><ServerCard /></li>
        </ol>
    </div>
</div>

<!--sets the navigation bar from NavBar.svelte as an overlay-->
<NavBar />

<style>
    .headline {
        float: left;
        padding: 10px;
    }

    .btn {
        float: right;
        padding: 10px;
    }

    .Box {
        display: flex;
        flex-direction: column;
        padding: 10px;
        margin-top: 20px;
    }

    .NavigationTop {
        background-color: #333;
        top: 0;
        color: #fff;
        padding: 1px;
        text-align: center;
        width: 100%;
    }

    .ServerList {
        display: flex;
        flex-direction: column;
    }

    li {
        /* Prevents item in the list from overlapping*/
        padding-bottom: 10px;
        /* Prevents the items in the list to display their number within the list*/
        list-style-type: none;
    }
</style>
