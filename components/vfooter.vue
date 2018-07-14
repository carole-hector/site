<template>
  <div class="footer">
    <div class="navLink" @click="top">Top</div>
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
.footer {
  width: 100%;
  height: 70px;
  background: #f4f4f4;
  display: flex;
  justify-content: left;
  align-items: center;
}
</style>

