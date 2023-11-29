<script>
    import ServerCard from "./ServerCard.svelte";
    import NavBar from "../../NavBar.svelte";
    import { onMount } from "svelte";
    import { pb } from "$lib/pocketbase";
    import { ArrowLongRight } from "svelte-heros-v2";
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

<div class="NavigationTop">
    <h1>Servers</h1>
</div>

<!--Displays a list of servers-->
<!--Uses ServerCard.svelte as a component to display servername and brief description-->
<div class="ServerList">
    <ol>
        <li><ServerCard></ServerCard></li>
        <li><ServerCard></ServerCard></li>
        <li><ServerCard /></li>
    </ol>
</div>

<p>this is the bottom of the page</p>

<!--sets the navigation bar from NavBar.svelte as an overlay-->
<NavBar />

<style>
    p {
        position: bottom;
    }

    .ServerList {
        display: flex;
        flex-direction: column;
    }

    li {
        /* Prevents item in the list from overlapping*/
        padding-bottom: 110px;
        /* Prevents the items in the list to display their number within the list*/
        list-style-type: none;
    }
</style>
