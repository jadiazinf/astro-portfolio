import { EAppLanguages } from "../types";

export function getAboutMeTranslations() {
  return {
    [EAppLanguages.ENGLISH]: {
      aboutMe1:
        "I'm a full stack developer passionate about creating digital solutions that positively impact people's lives. My education at Universidad Católica Andrés Bello provided me with a strong foundation in computer science and software development.",
      aboutMe2:
        "As a computer engineer, I specialize in all phases of the software development lifecycle—from analysis and design to implementation, testing, and maintenance. I'm proficient in modern technologies such as React, Next.js, Node.js, and SQL database systems. I enjoy working on projects that challenge my technical skills and push me to explore new tools and approaches.",
      aboutMe3:
        "When I'm not coding, I enjoy exploring new technologies and staying up to date with the latest trends in web development.",
    },
    [EAppLanguages.SPANISH]: {
      aboutMe1:
        "Soy un desarrollador full stack apasionado por crear soluciones digitales que impacten positivamente la vida de las personas. Mi formación en la Universidad Católica Andrés Bello me proporcionó una base sólida en ciencias de la computación y desarrollo de software.",
      aboutMe2:
        "Como ingeniero en computación, me especializo en todas las fases del ciclo de vida del software, desde el análisis y diseño hasta la implementación, pruebas y mantenimiento. Domino tecnologías modernas como React, Next.js, Nodejs y sistemas de bases de datos SQL. Disfruto trabajando en proyectos que desafían mis habilidades técnicas y me impulsan a explorar nuevas herramientas y enfoques.",
      aboutMe3:
        "Cuando no estoy programando, me gusta explorar nuevas tecnologías y mantenerme actualizado con las últimas tendencias en desarrollo web.",
    },
  };
}
