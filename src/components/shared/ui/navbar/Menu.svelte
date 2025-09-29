<script lang="ts">
  import * as Drawer from "$lib/components/ui/drawer/index.js";
  import { BurgerMenuIcon } from "$icons/index";
  import { useTranslations } from "$/i18n/utils";
  import type { NavbarLinkProps } from "./types";

  const { currentLang } = $props();

  const translations = useTranslations(currentLang);

  const navbarLinks: NavbarLinkProps[] = [
    { href: "#about", text: translations("components.shared.ui.navbar.about") },
    { href: "#experience", text: translations("components.shared.ui.navbar.experience") },
    // { href: "#projects", text: translations("components.shared.ui.navbar.projects") },
    { href: "#skills", text: translations("components.shared.ui.navbar.skills") },
    { href: "#contact", text: translations("components.shared.ui.navbar.contact") }
  ];

</script>


<Drawer.Root>
  <Drawer.Trigger class="cursor-pointer md:hidden">
    <BurgerMenuIcon />
  </Drawer.Trigger>
  <Drawer.Content class="w-full h-1/2">
    <div class="flex h-full flex-col gap-5 justify-center items-center">
      {#each navbarLinks as {href, text} }
        <a href={href}>{text}</a>
      {/each}
    </div>
  </Drawer.Content>
</Drawer.Root>
