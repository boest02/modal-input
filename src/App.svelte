<script>
  export let manifest;
  export let resolveAnswers;

  import Modal from "./Modal.svelte";

  $: {
    if (manifest.answers) {
      resolveAnswers();
    }
  }
</script>

<Modal bind:manifest headerText="This is the Header" position="left" />

