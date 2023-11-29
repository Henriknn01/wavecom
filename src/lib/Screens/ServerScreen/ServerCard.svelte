<!-- HTML code-->
<script>
    import { ArrowLongRight } from "svelte-heros-v2";
    let serverName = "Server Name ";
    let description = "description";
    let serverImg;
</script>

<div class="serverCard">
    <!--<img class="server-img" src={serverImg} alt="serverImg" /> -->
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
        background-color: #333;
        padding: 10px;
        justify-content: space-around;
        display: flex;
        overflow: auto;
    }

    .serverCard:hover {
        background-color: #555;
    }

    .serverText {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .arrowIcon {
        display: flex;
        flex-direction: row;
    }
</style>
