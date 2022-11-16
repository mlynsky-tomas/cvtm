export const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
}

export const getLanguage = () => {
    return getCookie("lang") ? getCookie("lang") : "en";
}

export const themes = {
    light: {
        primary: "#100F0F",
		secondary: "#6c8a8a",
		primarylight: "#F1F1F1",
		secondarylight: "#F0F1F4",
    },
    dark: {
        primary: "#EDE2CC",
		secondary: "#767065",
		primarylight: "#35383F",
		secondarylight: "#171B23",
    }
}

export const getThemesArray = () => {
    let result = [];
    for (const [key, value] of Object.entries(themes)) {
        let theme = {
            name: key,
            ...value
        }
        result = [...result, theme];
    }
    return result;
}

export const getScheme = () => {
    return getCookie("scheme") ? themes[getCookie("scheme")] : themes.dark;
}