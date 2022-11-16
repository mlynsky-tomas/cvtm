import Home from "./lib/Home.svelte";
import PersonalInformations from "./lib/PersonalInformations.svelte";
import Work from "./lib/Work.svelte";
import Education from "./lib/Education.svelte";
import Skills from "./lib/Skills.svelte";
import Languages from "./lib/Languages.svelte";

const routes = [
    {
      name: "/", 
      component: Home
    },
    {
      name: "/personal-informations", 
      component: PersonalInformations,
    },
    {
      name: "/work-experience",
      component: Work
    },
    {
      name: "/education",
      component: Education
    },
    {
      name: "/skills",
      component: Skills
    },
    {
      name: "/languages",
      component: Languages
    },
    {
      name: "404",
      path: "/",
      component: Home
    }
]

export { routes }