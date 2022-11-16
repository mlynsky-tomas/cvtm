<script>
    import { getLanguage, getThemesArray } from "../utils/cookies";
    import { _ } from "svelte-i18n";
    import GiHamburgerMenu from "svelte-icons/gi/GiHamburgerMenu.svelte";
    import IoIosSettings from "svelte-icons/io/IoIosSettings.svelte";

    let openMenu = false;
    let openSettings = false;
    let openThemes = false;
    let openLanguages = false;

    const changeLanguage = (lang) => {
        document.cookie = `lang=${lang}`;
        location.reload();
    }
    const changeScheme = (scheme) => {
        document.cookie = `scheme=${scheme}`;
        location.reload();
    }
    const toggleMenu = () => {
        openMenu = !openMenu;
        openSettings = openMenu ? false : openSettings;
    }
    const toggleSettings = () => {
        openSettings = !openSettings;
        openMenu = openSettings ? false : openMenu;
    }
    const toggleThemes = () => {
        openThemes = !openThemes;
    }
    const toggleLanguages = () => {
        openLanguages = !openLanguages;
    }
</script>

<div class="navbar w-100 desktop">
    <div class="menu">
        <a href="/personal-informations">{$_("personal_informations")}</a>
        <a href="/work-experience">{$_("work_experience")}</a>
        <a href="/education">{$_("education")}</a>
        <a href="/skills">{$_("skills")}</a>
        <a href="/languages">{$_("languages")}</a>
    </div>
    <div class="settings">
        <div class="color">
            <div class="pr-15">{$_("color_scheme")}</div>
            <div class="scheme">
                <div class="scheme-1"></div>
                <div class="scheme-2"></div>
                <div class="scheme-3"></div>
            </div>
            <div class="color_menu">
                {#each getThemesArray() as theme }
                    <button class="drop-item" on:click={() => changeScheme(theme.name)}>
                        <div class="scheme">
                            <div style="background-color: {theme.primary}"></div>
                            <div style="background-color: {theme.primarylight}"></div>
                            <div style="background-color: {theme.secondary}"></div>
                        </div>
                        <div class="drop-item-background" />
                    </button>
                {/each}
            </div>
        </div>
        <div class="language">
            <div class="pr-15">{$_("language")}</div>
            <div class="pr-25">
                <img src="src/assets/svg/{getLanguage()}.svg" alt="ENG" />
            </div>
            <div class="language_menu">
                <button class="drop-item" on:click={() => changeLanguage("en")}>
                    <div>
                        <img src="src/assets/svg/en.svg" alt="ENG" />
                    </div>    
                    <div>English</div>
                    <div class="drop-item-background bc-light" />
                </button>
                <button class="drop-item bc-dark c-light" on:click={() => changeLanguage("sk")}>
                    <div>
                        <img src="src/assets/svg/sk.svg" alt="ENG" />
                    </div>    
                    <div>Slovenčina</div>
                    <div class="drop-item-background bc-light" />
                </button>
            </div>
        </div>
    </div>
</div>
<div class="navbar w-100 mobile">
    <button class="menu-btn" on:click={() => toggleMenu()}>
        <GiHamburgerMenu />
    </button>
    <div class="menu" style="{!openMenu ? "left: -65vw" : "left: 0"}">
        <a href="/personal-informations"  on:click={() => toggleMenu()}>{$_("personal_informations")}</a>
        <a href="/work-experience" on:click={() => toggleMenu()}>{$_("work_experience")}</a>
        <a href="/education" on:click={() => toggleMenu()}>{$_("education")}</a>
        <a href="/skills" on:click={() => toggleMenu()}>{$_("skills")}</a>
        <a href="/languages" on:click={() => toggleMenu()}>{$_("languages")}</a>
    </div>
    <div class="settings" style="{!openSettings ? "right: -65vw" : "right: 0"}">
        <div class="language">
            <button on:click={() => toggleLanguages()}>
                <div>{$_("language")}</div>
                <div>
                    <img src="src/assets/svg/{getLanguage()}.svg" alt="ENG" />
                </div>
            </button>
            <div class="language_menu" style="{!openLanguages ? "display: none" : "display: block"}">
                <button class="drop-item" on:click={() => changeLanguage("en")}>
                    <div>
                        <img src="src/assets/svg/en.svg" alt="ENG" />
                    </div>    
                    <div>English</div>
                </button>
                <button class="drop-item bc-dark c-light" on:click={() => changeLanguage("sk")}>
                    <div>
                        <img src="src/assets/svg/sk.svg" alt="ENG" />
                    </div>    
                    <div>Slovenčina</div>
                </button>
            </div>
        </div>
        <div class="color">
            <button on:click={() => toggleThemes()}>
                <div>{$_("color_scheme")}</div>
                <div class="scheme">
                    <div class="scheme-1"></div>
                    <div class="scheme-2"></div>
                    <div class="scheme-3"></div>
                </div>
            </button>
            <div class="color_menu" style="{!openThemes ? "display: none" : "display: block"}">
                {#each getThemesArray() as theme }
                    <button class="drop-item" on:click={() => changeScheme(theme.name)}>
                        <div class="scheme">
                            <div style="background-color: {theme.primary}"></div>
                            <div style="background-color: {theme.primarylight}"></div>
                            <div style="background-color: {theme.secondary}"></div>
                        </div>
                    </button>
                {/each}
            </div>
        </div>
    </div>
    <button class="settings-btn" on:click={() => toggleSettings()}>
        <IoIosSettings />
    </button>
    <div class="navbar-background" />
</div>

<style>
    .navbar.mobile {
        display: none;
    }
    .navbar {
        background-color: var(--secondarylight);
        display: flex;
        line-height: 25px;
        height: 25px;
        color: var(--primary);
        border-bottom: 1px solid var(--secondary);
        padding-bottom: 20px;
        position: relative;
        z-index: 3;
    }
    .navbar-background {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 3;
        background-color: var(--secondarylight);
        box-shadow: 0 0 30px rgba(0,0,0,0.7);
        border-bottom: 1px solid var(--secondary);
    }

	a {
		color: var(--primary);
	}
	
    a:hover {
		color: var(--secondary);
		text-decoration: underline;
	}

    a:not(:first-child) {
        margin-left: 30px;
    }

    img {
        width: 25px;
        height: 25px;
        border: 1px solid var(--secondary);
    }

    .menu {
        width: calc(100% - 390px);
    }

    .settings {
        text-transform: uppercase;
        text-align: right;
        width: 390px;
        position: relative;
    }

    .scheme {
        display: flex;
    }

    .scheme div:not(:first-child) {
        margin-left:5px;
    }

    .scheme div {
        width: 25px;
        height:25px;
        border: 1px solid var(--secondary);
        box-sizing: border-box;
    }

    .scheme-1 {
        background-color: var(--primary);
    }

    .scheme-2 {
        background-color: var(--primarylight);
    }

    .scheme-3 {
        background-color: var(--secondary);
    }

    .language {
        display: flex;
        cursor: pointer;
        float: right;
    }
    .language_menu {
        position: absolute;
        width: 160px;
        margin-top: 25px;
        display: none;
        padding-top: 10px;
    }
    .color {
        display: flex;
        cursor: pointer;
        float: right;
    }
    .color_menu {
        position: absolute;
        width: auto;
        margin-top: 25px;
        margin-left: 0px;
        right: -10px;
        display: none;
        padding-top: 10px;
    }
    .language:hover > .language_menu {
        display: block;
    }
    .color:hover > .color_menu {
        display: block;
    }
    .drop-item {
        text-transform: uppercase;
        width: 100%;
        border: 0;
        display: flex;
        place-items: center;
        column-gap: 10px;
        padding: 10px;
        position: relative;
        font-size: 14px;
        cursor: pointer;
        color: var(--primary);
        background-color: var(--secondarylight);
    }
    .drop-item > div {
        position: relative;
        z-index: 1;
        line-height: 14px;
    }
    .drop-item > .drop-item-background {
        position: absolute;
        width: 100%;
        height: 100%;
        margin-left: -10px;
        z-index: 0;
        opacity: 0;
        background-color: var(--primary);
    }
    .drop-item:hover > .drop-item-background {
        opacity: 0.2;
    }
	@media only screen and (max-width: 1240px) {
        .navbar.desktop {
            display: none;
        }
        .navbar.mobile {
            display: flex;
        }
		.navbar {
            display: flex;
            line-height: 60px;
            height: 60px;
            color: var(--primary);
            border-bottom: 1px solid var(--secondary);
            width: 100vw;
            position: relative;
            padding-bottom: 0;
            z-index: 3;
        }
        a {
            color: var(--primary);
            display: block;
            padding: 20px;
            font-size: 20px;
            line-height: 20px;
            border-bottom: 1px solid var(--primarylight);
        }
        a:not(:first-child) {
            margin-left: 0;
        }
        .menu {
            top: 60px;
            width: 330px;
            height: calc(100vh - 60px);
            box-sizing: border-box;
            background-color: var(--secondarylight);
            position: absolute;
            z-index: 2;
            border-top: 1px solid var(--primarylight);
            border-right: 1px solid var(--primarylight);
            box-shadow: 0 0 30px rgba(0,0,0,0.6);
            transition: left 0.4s;
            overflow-y: scroll;
            scrollbar-color: var(--secondary) var(--primarylight);
            scrollbar-width: thin;
        }
        .menu::-webkit-scrollbar{
            width: 8px;
            background-color: var(--primarylight);
        }
        .menu::-webkit-scrollbar-thumb{
            background-color: var(--secondary);
        }
        .menu-btn, .settings-btn {
            width: 60px;
            height: 60px;
            padding: 10px;
            background: none;
            color: var(--primary);
            border: none;
            z-index: 4;
        }
        .settings-btn {
            position: absolute;
            right: 0;
        }
        .settings {
            top: 60px;
            width: 340px;
            height: calc(100vh - 60px);
            box-sizing: border-box;
            background-color: var(--secondarylight);
            position: absolute;
            z-index: 2;
            border-top: 1px solid var(--primarylight);
            border-right: 1px solid var(--primarylight);
            box-shadow: 0 0 30px rgba(0,0,0,0.6);
            transition: right 0.4s;
            text-align: left;
            overflow-y: scroll;
            scrollbar-color: var(--secondary) var(--primarylight);
            scrollbar-width: thin;
        }
        .settings::-webkit-scrollbar{
            width: 8px;
            background-color: var(--primarylight);
        }
        .settings::-webkit-scrollbar-thumb{
            background-color: var(--secondary);
        }
        .settings button {
            text-transform: uppercase;
            color: var(--primary);
            display: flex;
            padding: 20px;
            font-size: 20px;
            line-height: 30px;
            border: none;
            border-bottom: 1px solid var(--primarylight);
            background-color: var(--secondarylight);
            width: 100%;
        }
        .scheme {
            display: flex;
        }
        .scheme div:not(:first-child) {
            margin-left: 5px;
        }
        .scheme div {
            width: auto;
            height: auto;
            border: 0;
            box-sizing: border-box;
        }

        .scheme div, .language img {
            width: 30px;
            height: 30px;
            border: 1px solid var(--secondary);
            margin-top: 0;
            box-sizing: border-box;
        }

        .language img {
            margin-top: 0;
            position: absolute;
        }
        .drop-item img {
            position: relative;
        }
        .scheme-1 {
            background-color: var(--primary);
        }

        .scheme-2 {
            background-color: var(--primarylight);
        }

        .scheme-3 {
            background-color: var(--secondary);
        }

        .language {
            display: flex;
            flex-wrap: wrap;
            float: none;
        }
        .color {
            display: flex;
            flex-wrap: wrap;
            cursor: pointer;
            float: none;
            width: 100%;
        }
        .language_menu, .color_menu {
            position: relative;
            margin-top: 0;
            padding-top: 0;
            margin-left: 0;
            right: auto;
        }
        .color_menu, .language_menu {
            width: 100%;
        }
        .color_menu > .drop-item > .scheme > div {
            width: 86px;
            margin-top: 0;
        }
        button.drop-item {
            background-color: var(--primarylight);
            border-bottom: 1px solid var(--secondarylight);
            column-gap: 0;
        }
        .drop-item > div {
            line-height: 20px;
        }
        button > div:first-child {
            padding-right: 20px;
        }
	}
    
	@media only screen and (max-width: 600px) {
		.navbar {
            line-height: 15vw;
            height: 15vw;
            border-bottom: 0.2vw solid var(--secondary);
        }
        .navbar-background {
            box-shadow: 0 0 5vw rgba(0,0,0,0.7);
            border-bottom: 0.2vw solid var(--secondary);
        }
        a {
            padding: 3vw;
            font-size: 4vw;
            line-height: 8vw;
            border-bottom: 0.2vw solid var(--primarylight);
        }
        .menu {
            top: 15vw;
            width: 60vw;
            height: calc(100vh - 15vw);
            min-height: 71vw;
            border-top: 0.2vw solid var(--primarylight);
            border-right: 0.2vw solid var(--primarylight);
            box-shadow: 0 0 7vw rgba(0,0,0,0.7);
            overflow-y: hidden;
        }

        .menu-btn, .settings-btn {
            width: 15vw;
            height: 15vw;
            padding: 3vw;
            z-index: 4;
        }

        .settings {
            top: 15vw;
            width: 60vw;
            height: calc(100vh - 15vw);
            min-height: 71vw;
            border-top: 0.2vw solid var(--primarylight);
            border-right: 0.2vw solid var(--primarylight);
            box-shadow: 0 0 7vw rgba(0,0,0,0.7);
            overflow-y: hidden;
        }
        .settings button {
            padding: 3vw;
            font-size: 4vw;
            line-height: 8vw;
            border-bottom: 0.2vw solid var(--primarylight);
        }
        .scheme div:not(:first-child) {
            margin-left:0.5vw;
        }
        .scheme div, .language img {
            width: 5vw;
            height:5vw;
            border: 0.3vw solid var(--secondary);
            margin-top: 1.5vw;
        }
        .language img {
            position: relative;
            top: 0vw;
        }
        .drop-item img {
            top: 0.5vw;
        }
        .color_menu > .drop-item > .scheme > div {
            width: 15.1vw;
        }
        button.drop-item {
            border-bottom: 0.2vw solid var(--secondarylight);
        }
        .drop-item > div {
            line-height: 8vw;
        }
        button > div:first-child {
            padding-right: 3vw;
        }
	}
</style>