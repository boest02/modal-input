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
    .input-wrapper > input {
        width: 80%;        
        border: 1px solid darkgray;
        background: #fff;
        color: #000;
        font-size: 15px;
        padding: 5px;
        border-radius: 5px;
        margin: 5px 0;
    }
    .input-wrapper > label {
      font-size: 15px;
      font-weight: 600;
    }
    .input-wrapper > .error-holder {
      color: red;
      font-weight: 800;
    }
  </style>
  