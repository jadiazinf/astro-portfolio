import { EAppLanguages } from "$i18n/types";

export function getEmailTranslations() {
  return {
    [EAppLanguages.ENGLISH]: {
      name: {
        required: "The name is required",
        length: "The name must have a length of minimum 3 characters",
      },
      email: {
        required: "The email is required",
        format: "Not a valid email",
      },
      subject: {
        required: "The subject is required.",
        length: "The subject must have a length of minimum 3 characters",
      },
      message: {
        required: "The message is required",
        length: "The message must have a length of minimum 10 characters",
      },
    },
    [EAppLanguages.SPANISH]: {
      name: {
        required: "El nombre es requerido",
        length:
          "El nombre debe de tener una longitud de por lo menos 3 caracteres",
      },
      email: {
        required: "El email es requerido",
        format: "No es un correo válido",
      },
      subject: {
        required: "El asunto es requerido",
        length:
          "El asunto debe de tener una longitud de por lo menos 3 caracteres",
      },
      message: {
        required: "El mensaje es requerido",
        length:
          "El mensaje debe de tener una longitud de por lo menos 10 caracteres",
      },
    },
  };
}
