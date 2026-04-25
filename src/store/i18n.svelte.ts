import { de } from "../data/de";
import { en } from "../data/en";

type Language = "de" | "en";
const dictionaries = { de, en };

// State using Svelte 5 Runes
class I18nStore {
  lang = $state<Language>("de");

  // Translation function
  t(path: string, params: Record<string, any> = {}) {
    const keys = path.split(".");
    let value: any = dictionaries[this.lang];

    for (const key of keys) {
      if (value[key] === undefined) return path;
      value = value[key];
    }

    if (typeof value === "string") {
      let result = value;
      for (const [key, val] of Object.entries(params)) {
        result = result.replace(`{${key}}`, String(val));
      }
      return result;
    }

    return path;
  }

  setLanguage(newLang: Language) {
    this.lang = newLang;
  }
}

export const i18n = new I18nStore();
