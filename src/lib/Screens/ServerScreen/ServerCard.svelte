<!-- HTML code-->
<script>
    import { ArrowLongRight } from "svelte-heros-v2";
    let serverName = "Server Name ";
    let description = "description";
</script>

<div class="serverCard">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="22px"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
    </svg>
    <div class="serverText">
        <p>{serverName}</p>
        {description}
    </div>

    <!--problem with displaying arrow icon -->
    <div class="arrowIcon">
        <ArrowLongRight></ArrowLongRight>
    </div>
</div>

<style>
    .serverCard {
        position: fixed;
        background-color: blue;
        padding: 10px;
        justify-content: space-around;
        display: flex;
        overflow: auto;
    }

    .serverText {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .arrowIcon {
        display: flex;
        flex-direction: row;
        background-color: blue;
    }
</style>
