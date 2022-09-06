<script>
  export let labelText;
  export let name;
  export let required = false;
  export let errorText;
</script>
  
<div class="input-wrapper" id={`input--${name}`}>
  <label for={name}>{labelText}</label>
  <input  type="text"
          id={`${name}-id`}
          name={name} 
          {required} 
          on:change />
  {#if errorText}
    <div class="error-holder">{errorText}</div> 
  {/if}
       
</div>
  
  <style>
    input {
        width: 75%;
        min-width: 350px;
        max-width: 450px;
        border: 1px solid darkgray;
        background: #fff;
        color: #000;
        font-size: 1rem;
        padding: 5px;
    }
    label {
      font-size: 1rem;
      font-weight: 600;
    }
  </style>
  