<script lang="ts">
  import { EAppLanguages } from "$/i18n/types";
  import { useTranslations } from "$/i18n/utils";
  import * as Popover from "$lib/components/ui/popover/index.js";
  import type { TAppLanguagesArr, TChangeLocaleButtonProps } from "./types";

  const { currentLang, currentPath }: TChangeLocaleButtonProps = $props();

  function changeUrlLanguage(lang: EAppLanguages): string {
    const segments = currentPath.split("/").filter(Boolean);
    const isLocalized = Object.values(EAppLanguages).includes(segments[0] as EAppLanguages);

    if (isLocalized) {
      segments[0] = lang;
    } else {
      segments.unshift(lang);
    }

    return "/" + segments.join("/");
  }

const translateLocaleElements = useTranslations(currentLang);

  const appLanguagesArr: TAppLanguagesArr  = [
    { lang: EAppLanguages.ENGLISH, label: translateLocaleElements("components.shared.ui.locale.en") },
    { lang: EAppLanguages.SPANISH, label: translateLocaleElements("components.shared.ui.locale.es") }
  ];

</script>

<Popover.Root>
  <Popover.Trigger class="cursor-pointer" aria-label="Change locale">
    <span>
      { currentLang }
    </span>
  </Popover.Trigger>
  <Popover.Content class="w-auto">
    <div class="flex flex-col gap-2">
      {#each appLanguagesArr as {label, lang}}
        <a href={changeUrlLanguage(lang)}>{label}</a>
      {/each}
    </div>
  </Popover.Content>
</Popover.Root>
