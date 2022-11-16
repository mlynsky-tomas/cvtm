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
	})()
</script>
{#await fetchData}
    <Loader />
{:then data}
<div class="work-experience">
    <h1 class="mb-80">{$_("work_experience")}</h1>
    {#each data.work as job, i}
        {#if i !== 0}
            <div class="icon c-light"><FaAngleUp /></div>
        {/if}
        <div class="job">
            <div class="logo">
                {#if job.logo}
                    <img src={job.logo} alt={job.name} />
                {:else}
                    <img src="src/assets/jpg/no-logo.jpg" alt={job.name} />
                {/if}
            </div>
            <div class="timeframe">{job.timeframe}</div>
            <div class="position c-light">{job.position}</div>
            <div class="employer">{job.employer}</div>
        </div>
	{/each}
</div>
{:catch error}
	<p>An error occurred!</p>
{/await}

<style>
    .job {
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
    }
    .timeframe {
        width:150px;
        padding-left: 40px;
        font-family: InterBold
    }
    .position {
        width:250px;
    }
    .logo img {
        width:80px
    }
    .logo {
        height: 80px
    }
    
    @media only screen and (max-width: 1240px) {
        .job {
            width: 560px;
        }
        .logo img {
            width: 50px;
        }
        .logo {
            height: 50px;
            width: 70px;
        }
        .timeframe {
            padding: 0;
            width:110px;
        }
        .position {
            width:150px;
            text-align: center;
        }
        .employer {
            padding-left: 20px;
            text-align: center;
            width: 160px;
            color: var(--secondary)
        }
    }
    
    @media only screen and (max-width: 600px) {
        .job {
            width: 90vw;
            padding: 2vw;
            margin: 1vw auto;
            border: 0.2vw solid var(--secondary);
            box-shadow: 0px 0px 3vw rgba(0,0,0,0.3);
        }
        .icon {
            width: 5vw;
            height: 5vw;
        }
        .logo img {
            width: 12vw;
        }
        .logo {
            height: 12vw;
            width: 12vw;
        }
        .timeframe {
            width: 24vw;
            padding-left: 4vw;
            font-family: InterBold
        }
        .position {
            width: 45vw;
            text-align: left;
        }
        .employer {
            width: 100%;
            text-align: center;
        }
    }
</style>