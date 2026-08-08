import fr from "./i18n/fr.json";
import de from "./i18n/de.json";

const languages: Record<string, Record<string, string>> = {
	fr,
	de
};

export const gettext = (locale: string|undefined, source: string) => {
	if (!locale || locale === "en") {
		return source;
	}

	return languages[locale]?.[source];
};
