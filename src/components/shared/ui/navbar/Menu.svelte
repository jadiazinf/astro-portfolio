<script lang="ts">
  import * as Drawer from "$lib/components/ui/drawer/index.js";
  import { BurgerMenuIcon } from "$icons/index";
  import { useTranslations } from "$/i18n/utils";
  import type { NavbarLinkProps } from "./types";


  const { currentLang } = $props();

  let open = $state(false);

  const translations = useTranslations(currentLang);

  const navbarLinks: NavbarLinkProps[] = [
    { href: "#about", text: translations("components.shared.ui.navbar.about") },
    { href: "#experience", text: translations("components.shared.ui.navbar.experience") },
    // { href: "#projects", text: translations("components.shared.ui.navbar.projects") },
    { href: "#skills", text: translations("components.shared.ui.navbar.skills") },
    { href: "#contact", text: translations("components.shared.ui.navbar.contact") }
  ];

  function scrollToSection(href: string) {
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      // Espera un pequeño delay para que el drawer se cierre antes del scroll
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }

    open = false;

  }

</script>


<Drawer.Root bind:open>
  <Drawer.Trigger class="cursor-pointer md:hidden">
    <BurgerMenuIcon />
  </Drawer.Trigger>
  <Drawer.Content class="w-full h-1/2">
    <div class="h-full flex flex-col items-center justify-center gap-5">
      {#each navbarLinks as {href, text} }
        <button onclick={() => scrollToSection(href)} class="text-base font-medium">
          {text}
        </button>
      {/each}
    </div>
  </Drawer.Content>
</Drawer.Root>
