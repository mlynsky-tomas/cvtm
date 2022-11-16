<script>
    import Loader from "./Loader.svelte";
    import FaStar from "svelte-icons/fa/FaStar.svelte";
    import Switch from "./Switch.svelte";
    import { getLanguage } from "../utils/cookies";
    import { _ } from "svelte-i18n";

    let orderByLevel = false;
    let initData = {
        skills: []
    };
    let data = {
        skills: []
    };
    let filters = {
        frontend: true,
        backend: true,
        database: true,
        cms: true,
        repository: true,
        graphics: true
    };
    let filtersArray = [ "frontend", "backend", "cms", "graphics", "repository", "database" ];
    let isLoading = true;
    
    const editFilters = () => {
        let editFiltersArray = [];
        Object.keys(filters).forEach((filter) => {
            if(filters[filter]){
                editFiltersArray = [ ...editFiltersArray, filter ];
            }
        });
        filtersArray = editFiltersArray;
        filterData();
    }
	const fakeLoading = () => {
        return new Promise(resolve => setTimeout(resolve, 1000));
    }
    const filterData = () => {
        let filteredData = {...initData};
        filteredData["skills"] = filteredData.skills.filter(skill => filtersArray.includes(skill.type));
        if(!orderByLevel){
            filteredData["skills"] = filteredData.skills.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0));
        } else {
            filteredData["skills"] = filteredData.skills.sort((a,b) => b.level - a.level);
        }
        data = filteredData;
    }
    const fetchData = (async () => {
		const response = await fetch(`src/json/dummyData-${getLanguage()}.json`);
        await fakeLoading();
        let result =  await response.json();
        initData = result;
        isLoading = false;
        filterData();
	})();
    fetchData;

    $: orderByLevel, filterData();
    $: filters, editFilters();
</script>
{#if isLoading}
    <Loader />
{:else}
<div class="skills">
    <h1 class="mb-80">{$_("skills")}</h1>
    <div class="filters">
        <span class="{orderByLevel ? "c-normal" : ""}">{$_("order_by_name")}</span>
        <Switch bind:checked={orderByLevel} />
        <span class="{!orderByLevel ? "c-normal" : ""}">{$_("order_by_level")}</span>
        <div>
            <div>
                <span class="{filters.frontend ? "c-light" : "c-normal"}">Frontend</span>
                <Switch toggle bind:checked={filters.frontend} />
            </div>
            <div>
                <span class="{filters.backend ? "c-light" : "c-normal"}">Backend</span>
                <Switch toggle bind:checked={filters.backend} />
            </div>
            <div>
                <span class="{filters.database ? "c-light" : "c-normal"}">{$_("database")}</span>
                <Switch toggle bind:checked={filters.database} />
            </div>
            <div>
                <span class="{filters.cms ? "c-light" : "c-normal"}">CMS</span>
                <Switch toggle bind:checked={filters.cms} />
            </div>
            <div>
                <span class="{filters.repository ? "c-light" : "c-normal"}">{$_("repositories")}</span>
                <Switch toggle bind:checked={filters.repository} />
            </div>
            <div>
                <span class="{filters.graphics ? "c-light" : "c-normal"}">{$_("graphics")}</span>
                <Switch toggle bind:checked={filters.graphics} />
            </div>
        </div>
    </div>
    <div class="list">
        {#each data.skills as skill, i}
            <div class="skill">
                <div class="logo">
                    {#if skill.logo}
                        <img src={skill.logo} alt={skill.name} />
                    {:else}
                        <img src="src/assets/jpg/no-logo.jpg" alt={skill.name} />
                    {/if}
                </div>
                <div class="name">{skill.name}</div>
                <div class="level c-light">
                    {#each Array(5) as _, i}
                        {#if i < skill.level}
                            <div class="icon"><FaStar /></div>
                        {:else}
                            <div class="icon inactive"><FaStar /></div>
                        {/if}
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</div>
{/if}

<style>
    .list {
        display: flex;
        flex-wrap: wrap;
        width: 800px;
        margin: 0 auto;
        row-gap: 16px;
        column-gap: 16px;
    }
    .skill {
        display:flex;
        flex-wrap: wrap;
        place-items: center;
        width: 120px;
        background: var(--primarylight);
        padding: 20px;
        box-sizing: border-box;
        border: 1px solid var(--secondary);
        box-shadow: 0px 0px 20px  rgba(0,0,0,0.3);
    }
    .icon {
        width: 16px;
        height: 16px;
        margin: 0 auto;
    }
    .icon.inactive {
        opacity: 0.2;
    }
    .name {
        text-align: center;
        width: 100%;
        margin-top: 10px;
        font-family: InterBold
    }
    .level {
        width:250px;
        display: flex;
    }
    .logo img {
        width:80px
    }
    .logo {
        height: 80px
    }
    .filters {
        display:flex;
        flex-wrap: wrap;
        place-content: center;
        place-items: center;
        background: var(--primarylight);
        padding: 20px;
        box-sizing: border-box;
        border: 1px solid var(--secondary);
        box-shadow: 0px 0px 20px rgba(0,0,0,0.3);
        width: 800px;
        margin: 16px auto;
    }
    .filters>span{
        padding: 0 10px;
    }
    .filters>div {
        width: 100%;
        display: flex;
        place-content: center;
        place-items: center;
        margin-top: 15px
    }
    .filters>div>div {
        width: 120px;
        display: flex;
        flex-wrap: wrap;
        place-content: center;
    }
    .filters>div>div>span {
        width: 100%;
        text-align: center;
        padding-bottom: 5px;
    }

    @media only screen and (max-width: 1240px) {
        .list {
            width: 560px;
            row-gap: 10px;
            column-gap: 10px;
        }
        .skill {
            width: 132px;
            padding: 15px;
        }
        .icon {
            width: 20px;
            height: 20px;
        }
        .name {
            margin-top: 10px;
            margin-bottom: 10px;
        }
        .level {
            width: 100%;
        }
        .logo img {
            width: 102px;
        }
        .logo {
            height: 102px;
        }
        .filters {
            padding: 15px;
            width: 560px;
            margin: 10px auto;
        }
        .filters>span{
            padding: 0 15px;
        }
        .filters>div {
            margin-top: 15px;
            display: flex;
            flex-wrap: wrap;
        }
        .filters>div>div {
            width: 130px;
            margin-top: 5px;
            margin-bottom: 5px;
        }
    }

    @media only screen and (max-width: 600px) {
        .list {
            width: 90vw;
            row-gap: 3vw;
            column-gap: 3vw;
        }
        .skill {
            width: 28vw;
            padding: 3vw;
            border: 0.2vw solid var(--secondary);
            box-shadow: 0px 0px 3vw rgba(0,0,0,0.3);
        }
        .icon {
            width: 6vw;
            height: 6vw;
        }
        .name {
            margin-top: 2vw;
            margin-bottom: 1vw;
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
        .filters {
            padding: 2vw;
            border: 0.2vw solid var(--secondary);
            box-shadow: 0px 0px 3vw rgba(0,0,0,0.3);
            width: 90vw;
            margin: 3vw auto;
        }
        .filters>span{
            padding: 0 3vw;
        }
        .filters>div {
            margin-top: 2vw;
            display: flex;
            flex-wrap: wrap;
        }
        .filters>div>div {
            width: 25vw;
            margin-top: 1vw;
            margin-bottom: 1vw;
        }
    }
</style>