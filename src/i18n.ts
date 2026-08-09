import { readFileSync, writeFileSync } from "node:fs";
import fr from "./i18n/fr.json";
import de from "./i18n/de.json";

const ENGLISH_PATH = "./src/i18n/en.json";

const languages: Record<string, Record<string, string>> = {
  fr,
  de,
};

const insertEmptyKey = (source: string) => {
  const english = JSON.parse(String(readFileSync(ENGLISH_PATH)));
  english[source] = source;
  writeFileSync(ENGLISH_PATH, JSON.stringify(english, null, 2));
};

export const gettext = (locale: string | undefined, source: string) => {
  if (!locale || locale === "en") {
    return source;
  }

  const value = languages[locale]?.[source];

  if (process.env.I18N_UPDATE_TEMPLATE) {
    insertEmptyKey(source);
  }

  return value ?? source;
};
