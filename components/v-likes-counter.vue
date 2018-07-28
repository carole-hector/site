<template>
  <div class ="v-likes-counter-container">
    <div v-if="likes" class="main-clickable" @click="incrementLikes"><v-love-icon/></div>
    <h5>{{ likes }}</h5>
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
  computed: {
    likes() {
      const likes = this.$store.state.likes
      if(likes) {
        const thisLikes = Number(likes[this.permalink])
        thisLikes ? null : this.$store.dispatch("addItem", this.permalink)
        return thisLikes
      }
    }
  },
  methods: {
    async incrementLikes() {
      await this.$store.dispatch("incrementItem", this.permalink)
    }
  }
}


var functionLock = false;
var functionCallbacks = [];
var lockingFunction = function (callback) {
    if (functionLock) {
        functionCallbacks.push(callback);
    } else {
        $.longRunning(function(response) {
             while(functionCallbacks.length){
                 var thisCallback = functionCallbacks.pop();
                 thisCallback(response);
             }
        });
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
