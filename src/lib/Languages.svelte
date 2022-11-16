<script>
    import Loader from "./Loader.svelte";
    import FaStar from "svelte-icons/fa/FaStar.svelte";
    import {getLanguage} from "../utils/cookies";
    import { _ } from "svelte-i18n";

    const fakeLoading = () => {
        return new Promise(resolve => setTimeout(resolve, 1000));
    }
    const fetchData = (async () => {
		const response = await fetch(`src/json/dummyData-${getLanguage()}.json`);
        await fakeLoading();
        let result =  await response.json();
        return result;
	})();
</script>
{#await fetchData}
    <Loader />
{:then data}
<div class="languages">
    <h1 class="mb-80">{$_("languages")}</h1>
    <div class="list">
        {#each data.languages as language, i}
            <div class="language">
                <div class="logo">
                    {#if language.img}
                        <img src={language.img} alt={language.name} />
                    {:else}
                        <img src="src/assets/jpg/no-logo.jpg" alt={language.name} />
                    {/if}
                </div>
                <div class="details">
                    <div class="name c-light">{language.name}</div>
                    <div class="level c-light">
                        {#each Array(5) as _, i}
                            {#if i < language.level}
                                <div class="icon"><FaStar /></div>
                            {:else}
                                <div class="icon inactive"><FaStar /></div>
                            {/if}
                        {/each}
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>
{:catch error}
	<p>An error occurred!</p>
{/await}

<style>
    .list {
        display: flex;
        flex-wrap: wrap;
        width: 800px;
        margin: 0 auto;
        row-gap: 16px;
        column-gap: 16px;
    }
    .language {
        display:flex;
        flex-wrap: nowrap;
        place-items: center;
        width: 256px;
        background: var(--primarylight);
        padding: 20px;
        box-sizing: border-box;
        border: 1px solid var(--secondary);
        box-shadow: 0px 0px 20px  rgba(0,0,0,0.3);
    }
    .icon {
        width: 20px;
        height: 20px;
        margin: 0 auto;
    }
    .icon.inactive {
        opacity: 0.2;
    }
    .name {
        min-width: 80px;
        font-family: InterBold;
        text-align: center;
    }
    .level {
        width:auto;
        display: flex;
    }
    .logo img {
        width:80px;
        border: 1px solid var(--secondary);
        box-sizing: border-box;
    }
    .logo {
        height: 80px
    }
    .details {
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        width: 135px;
        height: 80px;
    }

    @media only screen and (max-width: 1240px) {
        .list {
            width: 560px;
            row-gap: 10px;
            column-gap: 10px;
        }
        .language {
            width: 180px;
            padding: 20px;
            flex-wrap: wrap;
        }
        .icon {
            width: 25px;
            height: 25px;
        }
        .name {
            margin-top: 10px;
            margin-bottom: 5px;
            min-width: 100%;
        }
        .level {
            width: 100%;
        }
        .logo img {
            width: 138px;
        }
        .logo {
            height: 138px;
            box-sizing: border-box
        }
        .details {
            width: 100%;
            height: auto;
        }
    }

    @media only screen and (max-width: 600px) {
        .list {
            width: 90vw;
            row-gap: 3vw;
            column-gap: 3vw;
        }
        .language {
            width: 28vw;
            padding: 3vw;
            border: 0.2vw solid var(--secondary);
            box-shadow: 0px 0px 3vw rgba(0,0,0,0.3);
            flex-wrap: wrap;
        }
        .icon {
            width: 6vw;
            height: 6vw;
        }
        .name {
            margin-top: 2vw;
            margin-bottom: 1vw;
            min-width: 100%;
        }
        .level {
            width: 100%;
        }
        .logo img {
            width: 22vw;
        }
        .logo {
            height: 22vw;
        }
        .details {
            width: 100%;
            height: auto;
        }
    }
</style>