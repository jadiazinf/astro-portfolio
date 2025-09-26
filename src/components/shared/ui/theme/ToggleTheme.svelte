<script lang="ts">
  import { setThemeToCookie } from "$/services/themes/set";
  import { getHtmlThemeClass, setHtmlThemeClass } from "$/utils/htmlDocument/helpers";
  import { MoonIcon, SunIcon } from "$icons/index";
  import { EThemeEnum } from "./types";

  let currentTheme = getHtmlThemeClass();

  function toggleTheme() {
    let newThemeValue: string;

    if (currentTheme === EThemeEnum.DARK)
      newThemeValue = EThemeEnum.LIGHT;
    else
      newThemeValue = EThemeEnum.DARK;

    currentTheme = newThemeValue as EThemeEnum;
    setThemeToCookie(newThemeValue as EThemeEnum);
    setHtmlThemeClass(newThemeValue as EThemeEnum);
  }
</script>

<button on:click={toggleTheme} class="cursor-pointer">
  {#if currentTheme === EThemeEnum.LIGHT}
    <MoonIcon />
  {:else}
    <SunIcon />
  {/if}
</button>
