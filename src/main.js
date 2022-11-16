import "./app.css";
import App from "./App.svelte";
import { addMessages, init } from "svelte-i18n";
import en from "./locale/en.json";
import sk from "./locale/sk.json";
import { getLanguage } from "./utils/cookies.js";

addMessages("en", en);
addMessages("sk", sk);

init({
  fallbackLocale: "en",
  initialLocale: getLanguage(),
});

const app = new App({
  target: document.getElementById("app")
})

export default app
