import { labels } from "./ui";
const defaultLang = "en";
export function useTranslation(lang: keyof typeof labels) {
  return function transale(key: keyof (typeof labels)[keyof typeof labels]) {
    return labels[lang][key] || labels[defaultLang][key];
  };
}
