<script lang="ts">
  import { useTranslations } from "$/i18n/utils";
  import { createContactSchema, type TCreateContactSchema } from "$/utils/emails/schema";
  import Button from "$lib/components/ui/button/button.svelte";
  import Input from "$lib/components/ui/input/input.svelte";
  import Textarea from "$lib/components/ui/textarea/textarea.svelte";
  import { createForm } from "felte";
  import { validator } from "@felte/validator-zod";
  import { contactFormInitialValues as initialValues } from "$/utils/emails/contactFormInitialValues";
  import Spinner from "$ui/spinner/Spinner.svelte";
  import { Toaster } from "$lib/components/ui/sonner";
  import { toast } from "svelte-sonner";

  const { currentLanguage } = $props();

  const schema = createContactSchema(currentLanguage);

  const translate = useTranslations(currentLanguage);

  async function onSubmit(values: TCreateContactSchema) {
    const response = await fetch("/api/emails/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      toast.success(translate("utils.emails.okResponse"));
    } else {
      toast.error(translate("utils.emails.badResponse"));
    }
  }

  const { form, isSubmitting, errors } = createForm<TCreateContactSchema>({
    initialValues,
    extend: [validator({schema})],
    onSubmit
  })

</script>

<Toaster />

<form class="space-y-4" use:form>
  <div class="grid grid-cols-2 gap-4">
    <div class="space-y-1">
      <Input name="name" placeholder={translate("pages.contact.name")} />
      {#if $errors.name}
        <p class="text-sm text-red-500">{$errors.name}</p>
      {/if}
    </div>

    <div class="space-y-1">
      <Input name="email" placeholder="Email" type="email" />
      {#if $errors.email}
        <p class="text-sm text-red-500">{$errors.email}</p>
      {/if}
    </div>
  </div>

  <div class="space-y-1">
    <Input name="subject" placeholder={translate("pages.contact.subject")} />
    {#if $errors.subject}
      <p class="text-sm text-red-500">{$errors.subject}</p>
    {/if}
  </div>

  <div class="space-y-1">
    <Textarea name="message" placeholder={translate("pages.contact.yourMessage")} rows={5} />
    {#if $errors.message}
      <p class="text-sm text-red-500">{$errors.message}</p>
    {/if}
  </div>

  <Button class="w-full cursor-pointer" type="submit" disabled={$isSubmitting}>
    {#if $isSubmitting}
      <Spinner />
    {/if}
    {translate("pages.contact.sendMessage")}
  </Button>
</form>
