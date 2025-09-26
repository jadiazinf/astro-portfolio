<script lang="ts">
  import { setThemeToCookie } from "$/services/themes/set";
  import { getHtmlThemeClass, setHtmlThemeClass } from "$/utils/htmlDocument/helpers";
  import { MoonIcon, SunIcon } from "$icons/index";
  import { ETheme } from "./types";

  let currentTheme = getHtmlThemeClass();

  function toggleTheme() {
    let newThemeValue: string;

    if (currentTheme === ETheme.DARK)
      newThemeValue = ETheme.LIGHT;
    else
      newThemeValue = ETheme.DARK;

    currentTheme = newThemeValue as ETheme;
    setThemeToCookie(newThemeValue as ETheme);
    setHtmlThemeClass(newThemeValue as ETheme);
  }
</script>

<button on:click={toggleTheme} class="cursor-pointer">
  {#if currentTheme === ETheme.LIGHT}
    <MoonIcon />
  {:else}
    <SunIcon />
  {/if}
</button>
