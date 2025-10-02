import { getLocaleTranslations } from "./components/shared/ui/locale/changeLocalePopover";
import { getNavbarTranslations } from "./components/shared/ui/navbar/navbar";
import { getAboutMeTranslations } from "./pages/aboutMe";
import { getContactTranslations } from "./pages/contact";
import { getExperienceTranslations } from "./pages/experience";
import { getHeroTranslations } from "./pages/hero";
import { EAppLanguages } from "./types";
import { getEmailTranslations } from "./utils/emails/emails";

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
      portfolio: getExperienceTranslations().portfolio.en,
      gma: getExperienceTranslations().gma.en,
      eddu: getExperienceTranslations().eddu.en,
      skills: {
        title: "Skills",
        tools: "Tools",
      },
      contact: getContactTranslations().en,
    },
    utils: {
      emails: {
        schema: getEmailTranslations().en,
        okResponse: "Email sent succesfully",
        badResponse: "The email could not be sent. Please try again later.",
      },
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
      portfolio: getExperienceTranslations().portfolio.es,
      gma: getExperienceTranslations().gma.es,
      eddu: getExperienceTranslations().eddu.es,
      skills: {
        title: "Habilidades",
        tools: "Herramientas",
      },
      contact: getContactTranslations().es,
    },
    utils: {
      emails: {
        schema: getEmailTranslations().es,
        okResponse: "Email enviado exitosamente",
        badResponse: "No se pudo enviar el correo, intente de nuevo más tarde.",
      },
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
