<script>
  import { LINKEDIN_URL } from "$/utils/constants";
  import { LinkedinIcon } from "$icons/index";
  import Button from "$lib/components/ui/button/button.svelte";
</script>

<Button variant="outline" size="icon" asChild class="cursor-pointer" aria-label="Open linkedin profile">
  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
    <LinkedinIcon />
  </a>
</Button>
