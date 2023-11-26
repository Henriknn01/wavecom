<script>
</script>

<div class="bottom-navbar">
    <!-- Example links, customize as needed -->

    <a href="src/lib/Screens/ServerScreen.svelte" class="nav-link">
        <div class="menuCard">
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
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
            </svg>
            Home
        </div>
    </a>

    <a href="src/lib/Screens/SearchScreen.svelte" class="nav-link">
        <div class="menuCard">
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
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
            </svg> Search
        </div></a
    >

    <a href="src/lib/Screens/DirectMessagesScreen.svelte" class="nav-link">
        <div class="menuCard">
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
                    d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
            </svg>
            Private Messages
        </div>
    </a>

    <a href="src/lib/Screens/ProfileScreen.svelte" class="nav-link">
        <div class="menuCard">
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
            Profile
        </div>
    </a>
</div>

<style>
    .bottom-navbar {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        background-color: #333;
        display: flex;
        justify-content: space-around;
        padding: 0.5rem;
    }

    .nav-link {
        color: #fff;
        text-decoration: none;
        padding: 0.5rem;
        transition: background-color 0.3s;
        /**flex-direction: column;**/
    }

    .nav-link:hover {
        background-color: #555;
    }

    .menuCard {
        display: flex;
        flex-direction: column;
    }
</style>
