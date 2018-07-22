<template>
  <section class="container">
      <div class="index-tube">
        <div v-for="post in posts" :key="post.permalink">
          <vpost-preview :post="post"/>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      posts: [{
        permalink: "mushroom-soup",
        title: "Mushroom Soup",
        description: "This mushroom soup is homemade and really nice. Nice oregano finish.",
        date: "12.08.16",
        tags: ["savoury", "mushroom", "soup"]
      }, {
        permalink: "victoria-sponge",
        title: "Victoria Soup",
        description: "This mushroom soup is homemade and really nice. Nice oregano finish.",
        date: "12.08.16",
        tags: ["savoury", "mushroom", "soup"]
      },
      {
        permalink: "strawberry-frangipane",
        title: "Strawberry Soup",
        description: "This mushroom soup is homemade and really nice. Nice oregano finish.",
        date: "12.08.16",
        tags: ["savoury", "mushroom" ,"hello"]
      },{
        permalink: "victoria-sponge",
        title: "Victoria Soup",
        description: "This mushroom soup is homemade and really nice. Nice oregano finish.",
        date: "12.08.16",
        tags: ["savoury", "mushroom", "soup"]
      },{
        permalink: "victoria-sponge",
        title: "Victoria Soup",
        description: "This mushroom soup is homemade and really nice. Nice oregano finish.",
        date: "12.08.16",
        tags: ["savoury", "mushroom", "soup"]
      },{
        permalink: "victoria-sponge",
        title: "Victoria Soup",
        description: "This mushroom soup is homemade and really nice. Nice oregano finish.",
        date: "12.08.16",
        tags: ["savoury", "mushroom", "soup"]
      },{
        permalink: "victoria-sponge",
        title: "Victoria Soup",
        description: "This mushroom soup is homemade and really nice. Nice oregano finish.",
        date: "12.08.16",
        tags: ["savoury", "mushroom", "soup"]
      },{
        permalink: "victoria-sponge",
        title: "Victoria Soup",
        description: "This mushroom soup is homemade and really nice. Nice oregano finish.",
        date: "12.08.16",
        tags: ["savoury", "mushroom", "soup"]
      }]
    }
  },
   methods: {
    show(v) { // this is not the right way. The map "posts" should get filtered.
      return v.tags[2] === "soup"
    }
  }
}
</script>

<style>
.index-tube {
  width: 100%;
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.index-tube > * {
  margin-bottom: 60px;
  width: 300px;
}
</style>
