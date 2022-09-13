<script>
  import Input from "./ModalInput.svelte";

  export let manifest = {};

  let inputs = manifest.inputs || [];
  
  let saveBtnText = manifest.styles.saveBtnText || 'Save';

  let modalHandle = {};
  let removingSelf = false;

  const validateForm = () => {
    let valid = true;
    
    inputs.forEach(input => {
        let inputWrapper = document.querySelector(`#input--${input.name}`);
        let inputElement = inputWrapper.querySelector('input');
       
        if(inputElement.required && !inputElement.value) {
          let errorHolder = inputWrapper.querySelector('.error-holder');
            input.error = "Response Required!";
            valid = false;
        } else {
          input.error = '';
          manifest.answers[input.name] = inputElement.value;
        }
    });
    inputs = inputs; //reactive
    manifest = manifest; // bubble changeto App
    
    return valid;    
  };

  const closeModal = (ev) => {
    ev.preventDefault();
    removingSelf = true;
    setTimeout(()=> modalHandle.remove(), 950);
  };

  const onSave = (ev) => {
    if(validateForm()) {
      closeModal(ev);
      manifest = manifest;
    } else {
      console.log("Error: Form not validated...");
    }
  };

  const onCancel = (ev) => {   
    closeModal(ev); 
  };

</script>

<div class="modal-background" on:change={(ev)=> console.log(`Change of ${ev.target.name} ev=${ev.target.value}`)} bind:this={modalHandle} class:slide-out={removingSelf} >
  <form class="modal-box"
        class:left={manifest.styles.position === '' || manifest.styles.position === 'left'}
        class:center={manifest.styles.position === 'center'}
        class:right={manifest.styles.position === 'right'}>
    <div class="header">{manifest.styles.headerText}</div>
    {#each inputs as input}
        <Input name={input.name} errorText={input.error} labelText={input.label} required={input.required}/>
    {/each}
    
    <div class="button-area">
      <button type="submit" on:click={onSave} class="save-btn">{saveBtnText}</button>
      <button type="button" on:click={onCancel} class="cancel-btn">Cancel</button>
    </div>
  </form>
</div>

<style>
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
    padding: 70px 45px 35px;
    margin-top: 20vh;
    width: 15vw;
    min-width: 300px;
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
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 11%;
    background-color: cornflowerblue;
    color: white;
    font-size: 20px;
    display: flex;
    align-items: center;
  }

  .modal-background > .modal-box > .button-area {
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
  }

  .modal-background > .modal-box > .button-area > button {
    color: #fff;
    background-color: slategray;
    font-size: 15px;
    padding: 5px 15px;
    border: .5px solid #000;
    border-radius: 5px;
    box-shadow: 1px 1px 6px -1px rgba(0, 0, 0, 1);
  }

  .modal-background > .modal-box > .button-area > button.save-btn {
    background-color: cornflowerblue;
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
