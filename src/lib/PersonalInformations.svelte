<script>
    import Loader from "./Loader.svelte";
    import MdPerson from "svelte-icons/md/MdPerson.svelte";
    import FaAsterisk from "svelte-icons/fa/FaAsterisk.svelte";
    import IoIosPeople from "svelte-icons/io/IoIosPeople.svelte";
    import IoIosMail from "svelte-icons/io/IoIosMail.svelte";
    import IoIosPhonePortrait from "svelte-icons/io/IoIosPhonePortrait.svelte";
    import {getLanguage} from "../utils/cookies";
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
    <div class="w-100">
        <h1 class="mb-80">{$_("personal_informations")}</h1>
        <div class="personal-info-table">
            <div><div class="icon"><MdPerson /></div> {$_("name")}</div>
            <div class="fw-b c-light">{data.personalData.name} {data.personalData.surname}</div>
            <div><div class="icon"><FaAsterisk /></div>{$_("birthday")}</div>
            <div class="fw-b c-light">{data.personalData.birthday}</div>
            <div><div class="icon"><IoIosPeople /></div>{$_("gender")}</div>
            <div class="fw-b c-light">{data.personalData.gender}</div>
            <div class="line w-100" />
            <h2 class="w-100 ta-c">{$_("contact_informations")}</h2>
            <div><div class="icon"><IoIosMail /></div>E-mail</div>
            <div class="fw-b c-light">{data.personalData.email}</div>
            <div><div class="icon"><IoIosPhonePortrait /></div>{$_("mobile_number")}</div>
            <div class="fw-b c-light">{data.personalData.phone}</div>
            <div><div class="icon"><MdPerson /></div>{$_("address")}</div>
            <div class="fw-b c-light">{data.personalData.street}, {data.personalData.city} {data.personalData.zip}, {data.personalData.country}</div>
        </div>
    </div>
{:catch error}
	<p>An error occurred!</p>
{/await}

<style>
    h2 {
        font-size: 28px;
        line-height: 40px;
    }
    .personal-info-table {
        display:flex;
        flex-wrap: wrap;
        width: 500px;
        background: var(--primarylight);
        padding: 50px;
        box-sizing: border-box;
        margin: 25px auto;
        border: 1px solid var(--secondary);
        box-shadow: 0px 0px 20px  rgba(0,0,0,0.3);
    }
    .personal-info-table > div{
        flex-grow: 1;
        width: 50%;
    }
    .icon {
        width: 25px;
        height: 25px;
        float: left;
        margin-right: 15px;
    }
    .line {
        height: 1px;
        background-color: var(--secondarylight);
        margin: 15px 0;
    }
    
    @media only screen and (max-width: 600px) {
        .personal-info-table {
            width: 90vw;
            padding: 5vw;
            margin: 2vw auto;
            border: 0.2vw solid var(--secondary);
            box-shadow: 0px 0px 3vw rgba(0,0,0,0.3);
        }
        .icon {
            width: 5vw;
            height: 5vw;
            margin-right: 2vw;
            margin-top: 0.5vw;
        }
        .line {
            height: 0.2vw;
            margin: 3vw 0;
        }
        h2 {
            font-size: 5vw;
            line-height: 5vw;
        }
    }
</style>