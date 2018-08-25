<template>
  <section v-if="mini" class="mini-container">
    <div class="tube">
      <div v-for="post in filtered" :key="post.permalink">
        <v-post-mini :post="post"/>
      </div>
    </div>
  </section>
  <section v-else class="preview-container">
    <div class="tube">
      <div v-for="post in filtered" :key="post.permalink">
        <v-post-preview :post="post"/>
      </div>
    </div>
  </section>
</template>

<script>
import { filterPosts } from '~/core/utils'
export default {
  name: "v-all-posts",
  scrollToTop: true,
  props: {
    posts: {
      type: Array,
      required: true
    },
    search: {
      type: String
    },
    mini: {
      type: Boolean
    }
  },
  computed: {
    filtered() {
      const v = this.search
      return filterPosts(this.posts, v)
    }
  }
}
</script>

<style lang="stylus">

.mini-container {
  margin-top: 20px;

  .tube {
    width: 100%;
    max-width: 1000px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .tube > * {
    margin-bottom: 20px;
  }
}

.preview-container > h2 {
  text-align: center;
}
.preview-container {
  margin-top: 20px;

  .tube {
    width: 100%;
    max-width: 1000px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .tube > * {
    margin-bottom: 60px;
    margin-right: 5px;
    margin-left: 5px;
    border: solid 1px;
    border-color: #e0e0e0;
    background: white;
  }
}
@media only screen and (max-width: 340px) {
  .preview-container {
    margin: 0px;

    .tube > * {
      margin-bottom: 20px;
      border: none;
      background: none;
    }
  }
}
</style>
