import { getLocaleTranslations } from "./components/shared/ui/locale/changeLocalePopover";
import { getNavbarTranslations } from "./components/shared/ui/navbar/navbar";
import { getAboutMeTranslations } from "./pages/aboutMe";
import { getExperienceTranslations } from "./pages/experience";
import { getHeroTranslations } from "./pages/hero";
import { EAppLanguages } from "./types";

const defaultLang = EAppLanguages.ENGLISH;

export const AppTranslations = {
  [EAppLanguages.ENGLISH]: {
    components: {
      shared: {
        ui: {
          navbar: getNavbarTranslations().en,
          locale: getLocaleTranslations().en,
        },
      },
    },
    pages: {
      hero: getHeroTranslations().en,
      aboutMe: getAboutMeTranslations().en,
      professionalExperience: "Professional Experience",
      gma: getExperienceTranslations().gma.en,
      eddu: getExperienceTranslations().eddu.en,
    },
  },
  [EAppLanguages.SPANISH]: {
    components: {
      shared: {
        ui: {
          navbar: getNavbarTranslations().es,
          locale: getLocaleTranslations().es,
        },
      },
    },
    pages: {
      hero: getHeroTranslations().es,
      aboutMe: getAboutMeTranslations().es,
      professionalExperience: "Experiencia profesional",
      gma: getExperienceTranslations().gma.es,
      eddu: getExperienceTranslations().eddu.es,
    },
  },
};

function getNestedValue(obj: unknown, path: string): unknown {
  return path.split(".").reduce((acc, segment) => {
    if (typeof acc === "object" && acc !== null && segment in acc) {
      return (acc as Record<string, unknown>)[segment];
    }
    return undefined;
  }, obj);
}

export function useTranslations(lang: EAppLanguages) {
  return function translate(path: string): string {
    const fallback = getNestedValue(AppTranslations[defaultLang], path);
    const value = getNestedValue(AppTranslations[lang], path);
    return (value ?? fallback ?? "") as string;
  };
}
