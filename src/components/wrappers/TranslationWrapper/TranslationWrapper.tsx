import { useLocation, useParams } from "react-router-dom";
import { AVAILABLE_LANGUAGES } from "../../../global/constants/translation";
import { i18n } from "../../../i18n";

export interface TranslationWrapperProps {
	children: React.ReactNode;
}

export const TranslationWrapper = ({ children }: TranslationWrapperProps) => {
	const params = useParams();
	const data = window.location.search?.split("lang=");

	if (data?.length > 1) {
		const lang = data[1].split("&")[0];
		if (Object.values(AVAILABLE_LANGUAGES).includes(lang)) {
			i18n.changeLanguage(lang);
		}
	}
	return <>{children}</>;
};
