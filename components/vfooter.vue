<template>
  <div class="header">
    <button @click="top">Top</button>
  </div>
</template>

<script>
export default {
  name: "vpost",
  methods: {
    top() {
      window.scrollTo(0,0)
    }
  }
}
</script>


<style>
.header {
  width: 100%;
  height: 70px;
  background: #f4f4f4;
  margin: 0px 0px 20px 0px;
  padding: 0px
}
</style>

