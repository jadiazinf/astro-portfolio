import { EAppLanguages } from "../types";

export function getHeroTranslations() {
  return {
    [EAppLanguages.ENGLISH]: {
      helloThere: "Hello there",
      fullStackDeveloper: "Full Stack Developer",
      description:
        "Graduate of Universidad Católica Andrés Bello in Caracas, Venezuela. Specialized in crafting exceptional digital experiences that blend elegant design with robust code.",
      myJob: "See my job",
      downloadCv: "Download CV",
    },
    [EAppLanguages.SPANISH]: {
      helloThere: "Hola a todos",
      fullStackDeveloper: "Desarrollador Full Stack",
      description:
        "Graduado de la Universidad Católica Andrés Bello en Caracas, Venezuela. Especializado en crear experiencias digitales excepcionales que combinan diseño elegante con código robusto.",
      myJob: "Ver mi trabajo",
      downloadCv: "Descargar CV",
    },
  };
}
