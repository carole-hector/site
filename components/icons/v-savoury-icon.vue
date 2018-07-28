<template>
  <div class="badge">
    <svg enable-background="new 0 0 24 24" height="30px" id="Layer_1" version="1.1" viewBox="0 0 24 24" width="30px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M12.2,3.1l2.2-2.2c0.2-0.2,0.2-0.5,0-0.7c-0.2-0.2-0.5-0.2-0.7,0L11,2.9L8.2,0.2C8,0,7.7,0,7.5,0.2c-0.2,0.2-0.2,0.5,0,0.7  l2.2,2.2C6.6,3.4,5,5.1,5,6c0,5.2,4,16,4,16c0.3,0.8,1,2,2,2s1.7-1.2,2-2c0,0,4-10.8,4-16C17,5.1,15.4,3.4,12.2,3.1z M11.8,20.5  C11.6,21.3,11.4,22,11,22c-0.3,0-0.5-0.6-0.8-1.5c0,0-0.7-1.6-1.4-4.5h0.7c0.3,0,0.5-0.2,0.5-0.5S9.8,15,9.5,15h-1  c-0.4-1.4-0.7-3.1-1-5h2C9.8,10,10,9.8,10,9.5S9.8,9,9.5,9H7.4C7.2,8.2,7.1,7.4,7,6.5C7,6.5,8,5,11,5s4,1.5,4,1.5  c0,0.2,0,0.3-0.1,0.5h-2.4C12.2,7,12,7.2,12,7.5S12.2,8,12.5,8h2.3c-0.3,1.8-0.6,3.5-0.9,5h-1.4c-0.3,0-0.5,0.2-0.5,0.5  s0.2,0.5,0.5,0.5h1.2C12.8,18.1,11.8,20.5,11.8,20.5z"/></svg>
  </div>
</template>

<script>
export default {
  name: "v-savoury-icon",
  props: {
    scale: {
      type: Number,
      default: 1
    },
    fill: {
      type: String
    }
  }
}
</script>

<style>
.badge {
  display: block;
  flex: 0 0 auto;
}
  svg {
    display: block;
  }

</style>
