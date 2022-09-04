<script>
  export let labelText;
  export let name;
  export let required = false;
  export let errorText;
</script>
  
<div class="input-wrapperr" id={`input--${name}`}>
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
        width: 25vw;
        min-width: 350px;
        max-width: 450px;
        border: 1px solid darkgray;
        background: #fff;
        color: #000;
    }
  </style>
  