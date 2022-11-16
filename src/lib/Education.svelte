<script>
    import Loader from "./Loader.svelte";
    import FaAngleUp from "svelte-icons/fa/FaAngleUp.svelte";
    import { getLanguage } from "../utils/cookies";
    import { _ } from "svelte-i18n";
    
	const fakeLoading = () => {
        return new Promise(resolve => setTimeout(resolve, 1000));
    }
    const fetchData = (async () => {
		const response = await fetch(`src/json/dummyData-${getLanguage()}.json`);
        await fakeLoading();
        return await response.json();
	})();
</script>
{#await fetchData}
    <Loader />
{:then data}
    <div class="education">
        <h1 class="mb-80">{$_('education')}</h1>
        {#each data.education as school, i}
            {#if i !== 0}
                <div class="icon"><FaAngleUp /></div>
            {/if}
            <div class="school">
                <div class="timeframe">{school.timeframe}</div>
                <div class="name c-light">{school.name}</div>
                <div class="city">{school.city}</div>
            </div>
        {/each}
    </div>
{:catch error}
	<p>An error occurred!</p>
{/await}

<style>
    .school {
        display:flex;
        flex-wrap: wrap;
        place-items: center;
        width: 800px;
        background: var(--primarylight);
        padding: 20px;
        box-sizing: border-box;
        margin: 10px auto;
        border: 1px solid var(--secondary);
        box-shadow: 0px 0px 20px rgba(0,0,0,0.3);
    }
    .icon {
        width: 30px;
        height: 30px;
        margin: 0 auto;
        color: var(--primary)
    }
    .timeframe {
        width:150px;
        padding-left: 40px;
        font-family: InterBold
    }
    .name {
        width:480px;
    }
    
    @media only screen and (max-width: 1240px) {
        .school {
            width: 560px;
        }
        .timeframe {
            padding: 0;
            width:110px;
        }
        .name {
            width:300px;
            text-align: center;
        }
        .city {
            padding-left: 20px;
            text-align: center;
            width: 85px;
            color: var(--secondary)
        }
    }

    @media only screen and (max-width: 600px) {
        .school {
            width: 90vw;
            padding: 2vw;
            margin: 1vw auto;
            border: 0.2vw solid var(--secondary);
            box-shadow: 0px 0px 3vw rgba(0,0,0,0.3);
        }
        .timeframe {
            width: 22vw;
            padding-left: 4vw;
            font-family: InterBold
        }
        .icon {
            width: 5vw;
            height: 5vw;
        }
        .name {
            width: 42vw;
        }
        .city {
            padding-left: 0;
            text-align: center;
            width: 17vw;
            color: var(--secondary)
        }
    }
</style>