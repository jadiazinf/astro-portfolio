import * as z from "zod";
import type { EAppLanguages } from "$i18n/types";
import { useTranslations } from "$i18n/utils";

export function createContactSchema(defaultLanguage: EAppLanguages) {
  const t = useTranslations(defaultLanguage);

  return z.object({
    name: z
      .string({ required_error: t("utils.emails.schema.name.required") })
      .min(1, { message: t("utils.emails.schema.name.length") }),
    email: z
      .string({ required_error: t("utils.emails.schema.email.required") })
      .email({ message: t("utils.emails.schema.email.format") }),
    subject: z
      .string({ required_error: t("utils.emails.schema.subject.required") })
      .min(3, { message: t("utils.emails.schema.subject.length") }),
    message: z
      .string({ required_error: t("utils.emails.schema.message.required") })
      .min(10, { message: t("utils.emails.schema.message.length") }),
  });
}

export type TCreateContactSchema = z.infer<
  ReturnType<typeof createContactSchema>
>;
