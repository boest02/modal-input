<script>
  import Input from "./ModalInput.svelte";
  import { afterUpdate } from "svelte"

  export let headerText;
  export let position = '';
  export let manifest = {};

  console.log("Here...");

  let inputs = manifest.inputs || [];

  let modalHandle = {};
  let removingSelf = false;

  const validateForm = () => {
    let valid = true;
    console.log("in validate: ", inputs);
    inputs.forEach(input => {
        let inputWrapper = document.querySelector(`#input--${input.name}`);
        let inputElement = inputWrapper.querySelector('input');
        console.log("validate: ", {inputWrapper, inputElement});
        console.log("Input:: ", {value: inputElement.value, required: inputElement.required});
        if(inputElement.required && !inputElement.value) {
          let errorHolder = inputWrapper.querySelector('.error-holder');
            console.log("error: ", errorHolder);
            input.error = "Error!!!";
            console.log("error:", input);
            valid = false;
        } else {
          input.error = "";
          input.value = inputElement.value;
        }
    });
    inputs = inputs; //reactive
    manifest = manifest; // bubble changeto App
    
    return valid;    
  };

  const closeModal = (ev) => {
    console.log("Remove Self: ", modalHandle);
    ev.preventDefault();
    removingSelf = true;
    setTimeout(()=> modalHandle.remove(), 950);
  };

  const onSave = (ev) => {
    console.log("save: ", ev);
    if(validateForm()) {
      console.log("Form Validated...");
      closeModal(ev);
      manifest.answers = true;
      manifest = manifest;
    } else {
      console.log("Error: Form not validated...");
    }
  };

  const onCancel = (ev) => {   
    closeModal(ev); 
  };

  afterUpdate(()=> console.log("Updated!!!!, ", inputs));

</script>

<div class="modal-background" on:change={(ev)=> console.log(`Change of ${ev.target.name} ev=${ev.target.value}`)} bind:this={modalHandle} class:slide-out={removingSelf} >
  <form class="modal-box"
        class:left={position === '' || position === 'left'}
        class:center={position === 'center'}
        class:right={position === 'right'}>
    <div class="header">{headerText}</div>
    {#each inputs as input}
        <Input name={input.name} errorText={input.error} labelText={input.label} required={input.required}/>
    {/each}
    
    <div class="button-area">
      <button type="submit" on:click={onSave} class="save-btn">Save</button>
      <button type="button" on:click={onCancel} class="cancel-btn">Cancel</button>
    </div>
  </form>
</div>

<style type="text/scss">
  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    z-index: 1000000250;
    opacity: 1;
    transition: opacity 1s ease-out;
  }

  .modal-background.slide-out {    
    animation: 2s ease-out 0s 1 slideOutTop;
    opacity: 0;
  }

  .modal-background > .modal-box {
    border: 1px solid gray;
    border-radius: 15px;
    padding: 65px 45px 35px;
    margin-top: 20vh;
    width: fit-content;
    font-size: 1rem;
    color: #000;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    position: relative;
    overflow: hidden;
    animation: 1.2s ease-out 0s 1 slideInBottom;
  }

  .modal-background > .modal-box.left {
    align-items: flex-start;
  }

  .modal-background > .modal-box.right {
    align-items: flex-end;
}

.modal-background > .modal-box.center {
    align-items: center
}

  .modal-background > .modal-box > .header {
    padding: 15px 0 0 10px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 35px;
    background-color: cornflowerblue;
    color: white;
    font-size: 1.2rem;
  }


@keyframes slideInBottom {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes slideOutTop {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(-200%);
    }
  }
</style>
