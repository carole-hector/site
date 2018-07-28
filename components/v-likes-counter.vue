<template>
  <div class ="v-likes-counter-container">
    <div @click="incrementLikes"><v-home-icon/></div>
    <div>{{ likes }}</div>
  </div>
</template>

<script>
export default {
  name: "v-likes-counter",
  props: {
    permalink: {
      type: String
    }
  },
  data() {
    return {
      offline: 0
    }
  },
  computed: {
    likes() {
      const likes = this.$store.state.likes
      if(likes) {
        const thisLikes = Number(likes[this.permalink])
        thisLikes ? null : this.$store.dispatch("addItem", this.permalink)
        return this.offline ? thisLikes + this.offline : thisLikes
      }
    }
  },
  methods: {
    async incrementLikes() {
      this.offline++
      await this.$store.dispatch("incrementItem", this.permalink)
      await this.$store.dispatch("fetchLikes")
      this.offline = 0
    }
  }
}
</script>

<style>
.v-likes-counter-container {
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
