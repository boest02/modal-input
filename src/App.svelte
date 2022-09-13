<script>
  export let manifest;
  export let resolveAnswers;

  import Modal from "./Modal.svelte";

  $: {
    if (Object.keys(manifest.answers).length) {
      resolveAnswers();
    }
  }
</script>

<Modal bind:manifest />

