<script>
	import Navbar from "./lib/Navbar.svelte";
	import { Router } from "svelte-router-spa"
	import { routes } from "./routes";
    import { getScheme } from "./utils/cookies";
    import { _ } from "svelte-i18n";
</script>

<div 
	class="main"
	style="
		--primary: {getScheme().primary};
		--secondary: {getScheme().secondary};
		--primarylight: {getScheme().primarylight};
		--secondarylight: {getScheme().secondarylight}
	"
>
	<Navbar />
	<div class="content w-100">
		<Router {routes} />
	</div>
</div>

<style>
	.main {
		height: 100vh;
		margin: 0;
		height: 100vh;
		color: var(--primary);
		background-image: url("assets/png/bg.png");
		background-position: 50%;
		background-size: cover;
		background-repeat: no-repeat;
		background-color: var(--secondarylight);
		overflow: hidden;
		padding: 40px;
		box-sizing: border-box;
	}
	.content {
		height: calc(100% - 46px);
		padding-bottom: 20px;
		overflow-y: scroll;
		scrollbar-color: var(--secondary) var(--primarylight);
		scrollbar-width: thin;
	}
	.content::-webkit-scrollbar{
		width: 8px;
		background-color: var(--primarylight);
	}
	.content::-webkit-scrollbar-thumb{
		background-color: var(--secondary);
	}

	@media only screen and (max-width: 1240px) {
		.main {
			padding: 0;
		}
		.content {
			height: calc(100% - 80px);
			padding-bottom: 20px;
		}
	}

	@media only screen and (max-width: 600px) {
		.content {
			height: calc(100% - 20vw);
			padding-bottom: 15vw;
		}
	}
</style>
