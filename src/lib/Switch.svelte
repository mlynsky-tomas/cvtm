<script>
    export let checked = false;
    export let toggle = false;
</script>
  
<label class="switch">
    <input type="checkbox" bind:checked />
    <span class="slider" style="{toggle && !checked ? "background-color:var(--secondary)" : "background-color:var(--primary)"}" />
</label>
  
<style>
    .switch {
      position: relative;
      display: inline-block;
      width: 50px;
      height: 28px;
    }
  
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }
  
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 28px;
      background-color: var(--primary);
    }
  
    .slider:before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 4px;
      bottom: 4px;
      background-color: var(--primarylight);
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }
  
    input:checked + .slider:before {
      -webkit-transform: translateX(21px);
      -ms-transform: translateX(21px);
      transform: translateX(21px);
    }

    @media only screen and (max-width: 600px) {
      .switch {
        width: 12vw;
        height: 7vw;
      }
      .slider {
        border-radius: 7vw;
      }
      .slider:before {
        height: 6vw;
        width: 6vw;
        left: 0.5vw;
        bottom: 0.5vw;
      }
      input:checked + .slider:before {
        -webkit-transform: translateX(5vw);
        -ms-transform: translateX(5vw);
        transform: translateX(5vw);
      }
    }
  </style>