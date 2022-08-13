import i18next from "i18next";
import { AVAILABLE_LANGUAGES } from "../global/constants/translation";
import enJSON from "./translations/en_us.json";
import ptJSON from "./translations/pt_br.json";

const resources = {
	en: { translation: enJSON },
	pt: { translation: ptJSON },
};

i18next.init({
	lng: AVAILABLE_LANGUAGES.EN,
	debug: true,
	resources,
	fallbackLng: "en",
	interpolation: {
		escapeValue: false,
	},
});

export const i18n = i18next;
