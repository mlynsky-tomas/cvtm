<script>
    import { Stretch } from "svelte-loading-spinners";
    import { getScheme } from "../utils/cookies";
</script>

<div class="loader">
    <div>
        <Stretch size="100" color="{getScheme().primary}" unit="%" />
    </div>
</div>

<style>
    .loader {
        height: 100%;
        display: flex;
        margin: 0 auto;
        place-content: center;
        place-items: center;
    }
    .loader > div {
        width: 100px;
        height: 100px;
    }

    @media only screen and (max-width: 600px) {
        .loader > div {
            height: 20vw;
            width: 20vw;
        }
    }
</style>