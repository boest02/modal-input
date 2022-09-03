<script>
  export let manifest;
  export let resolveAnswers;

  import Modal from "./Modal.svelte";

  $: {
    console.log("Manifest: ", manifest);
    if(manifest.answers){
      resolveAnswers();
    }
  }

</script>

<Modal bind:manifest headerText="This is the Header" position="left" />

<style type="text/scss">
  $color: red;

  h1 {
    color: $color;
    padding: 20px;
  }

  div {
    background: green;
    width: 90%;
    padding: 15px;
    margin: 10px auto;

    > p {
      color: #fff;
      font-weight: 800;
      font-size: 1em;
      text-align: center;
    }
  }
</style>
