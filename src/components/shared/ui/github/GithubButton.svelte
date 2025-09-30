<script>
  import { GITHUB_URL } from "$/utils/constants";
  import { GithubIcon } from "$icons/index";
  import Button from "$lib/components/ui/button/button.svelte";
</script>

<Button variant="outline" size="icon" asChild class="cursor-pointer" aria-label="Open github profile">
  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
    <GithubIcon />
  </a>
</Button>
