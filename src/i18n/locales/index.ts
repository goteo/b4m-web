import bs from "./bs.json";
import ca from "./ca.json";
import el from "./el.json";
import en from "./en.json";
import es from "./es.json";
import fr from "./fr.json";
import hr from "./hr.json";
import it from "./it.json";

export const labels = { es, en, ca, it, el, hr, bs, fr };
export type Locale = keyof typeof labels;

export function isSupportedLocale(code: string): code is Locale {
    return code in labels;
}

export const languagesList: Record<Locale, string> = {
    en: "English",
    es: "Español",
    it: "Italiano",
    el: "ελληνική",
    ca: "Català",
    hr: "Hrvatski",
    bs: "Bosanski",
    fr: "Français",
};
