import { EAppLanguages } from "../types";

export function getContactTranslations() {
  return {
    [EAppLanguages.ENGLISH]: {
      letsWorkTogether: "Let's Work Together",
      projectInMind: "Do You Have a Project in Mind?",
      projectText:
        "I'm always interested in new opportunities and challenging projects. If you have an idea or need help with your next project, feel free to reach out.",
      sendMessage: "Send Me a Message",
      name: "Name",
      subject: "Subject",
      yourMessage: "Your message...",
      send: "Send Message",
    },
    [EAppLanguages.SPANISH]: {
      letsWorkTogether: "Trabajemos Juntos",
      projectInMind: "¿Tienes un proyecto en mente?",
      projectText:
        "Estoy siempre interesado en nuevas oportunidades y proyectos desafiantes. Si tienes una idea o necesitas ayuda con tu próximo proyecto, no dudes en contactarme.",
      sendMessage: "Envíame un mensaje",
      name: "Nombre",
      subject: "Asunto",
      yourMessage: "Tu mensaje...",
      send: "Enviar mensaje",
    },
  };
}
