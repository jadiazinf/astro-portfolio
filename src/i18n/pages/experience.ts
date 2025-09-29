import { EAppLanguages } from "../types";

export function getExperienceTranslations() {
  return {
    portfolio: {
      [EAppLanguages.ENGLISH]: {
        period: "September 2025",
        title: "Portfolio",
        company: "Personal",
        description:
          "Portfolio built with Astro and Svelte, using Tailwind CSS and Shadcn to deliver a modern, accessible, and high-performance interface. Its purpose is to showcase my work, skills, and professional approach as a web developer.",
      },
      [EAppLanguages.SPANISH]: {
        period: "septiembre 2025",
        title: "Portafolio",
        company: "Personal",
        description:
          "Portafolio desarrollado con Astro y Svelte, utilizando Tailwind CSS y Shadcn para construir una interfaz moderna, accesible y de alto rendimiento. Su propósito es presentar mi trabajo, habilidades y enfoque profesional como desarrollador web",
      },
    },
    gma: {
      [EAppLanguages.ENGLISH]: {
        period: "April 2024 – July 2025",
        title: "Full Stack Developer",
        company: "GMA Desarrollo, Caracas, Venezuela",
        description:
          "Developed a marketplace for automotive workshops, allowing users to search for services, request quotes, hire providers, and track service history. Businesses could monitor service quality metrics, completed jobs, and customer satisfaction. Technologies used: Next.js (v15), Ruby on Rails (v7), PostgreSQL (v14)",
      },
      [EAppLanguages.SPANISH]: {
        period: "abril 2024 – julio 2025",
        title: "Desarrollador Full Stack",
        company: "GMA Desarrollo, Caracas, Venezuela",
        description:
          "Desarrollo de un marketplace de talleres automotrices, donde los usuarios pueden buscar talleres, solicitar presupuestos, contratar servicios y llevar un historial. Las empresas pueden visualizar métricas de calidad, servicios completados y satisfacción del cliente. Tecnologías utilizadas: Next.js (v15), Ruby on Rails (v7), PostgreSQL (v14).",
      },
    },
    eddu: {
      [EAppLanguages.ENGLISH]: {
        period: "August 2023 – September 2024",
        title: "Full Stack Developer",
        company: "Eddu, Caracas, Venezuela",
        description:
          "Built an educational platform with modules for reporting, process automation, collections, and notifications. Technologies used: Next.js (v13), TypeScript, HTML, CSS, Git, GitHub, ",
      },
      [EAppLanguages.SPANISH]: {
        period: "agosto 2023 – septiembre 2024",
        title: "Desarrollador Full Stack",
        company: "Eddu, Caracas, Venezuela",
        description:
          "Desarrollo de una plataforma para sistemas educativos, con módulos de informes, automatización de procesos, colecciones y notificaciones. Tecnologías utilizadas: Next.js (v13), TypeScript, HTML, CSS, Git, GitHub, Node.js (v17), Google Cloud Functions, PostgreSQL (v14).",
      },
    },
  };
}
