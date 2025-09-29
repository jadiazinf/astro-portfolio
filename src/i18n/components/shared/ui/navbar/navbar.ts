import { EAppLanguages } from "$i18n/types";
import type { TGetNavbarTranslations } from "./types";

export function getNavbarTranslations(): TGetNavbarTranslations {
  return {
    [EAppLanguages.ENGLISH]: {
      about: "About me",
      contact: "Contact",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
    },
    [EAppLanguages.SPANISH]: {
      about: "Sobre mí",
      contact: "Contacto",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
    },
  };
}
