<script>
  import { ArrowDownIcon } from "$icons/index";

  function scrollToAbout() {
  const element = document.getElementById("about")
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}
</script>

<button
  on:click={scrollToAbout}
  class="text-muted-foreground hover:text-foreground transition-colors animate-bounce cursor-pointer"
>
  <ArrowDownIcon class="h-6 w-6 mx-auto" />
</button>
