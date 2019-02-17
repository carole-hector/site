<template>
  <div>
    <div v-if="isOffline" class="has-background-dark">
      <div
        class="container has-text-centered has-text-light has-text-weight-semibold"
      >
        Offline
      </div>
    </div>
    <nav class="navbar is-uppercase">
      <div class="container">
        <div class="navbar-brand">
          <div class="navbar-item">
            <nuxt-link to="/">
              <h1 class="is-size-6-touch is-size-3-desktop has-text-black">
                Carole Hector
              </h1>
            </nuxt-link>
          </div>
          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            :class="{ 'is-active': isActive }"
            @click="isActive = !isActive"
          >
            <span aria-hidden="true"></span> <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-end">
          <div class="navbar-menu" :class="{ 'is-active': isActive }">
            <nuxt-link
              v-for="(link, index) in navLinks"
              @click.native="isActive = !isActive"
              :key="index"
              :to="link.path"
              class="navbar-item"
            >
              <span class="icon">
                <v-icon :icon="link.icon" :fill="link.fill" />
              </span>
              <span v-text="link.name" />
            </nuxt-link>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">More</a>
              <div class="navbar-dropdown is-right">
                <div v-for="(link, index) in dropLinks" :key="index">
                  <nuxt-link
                    @click.native="isActive = !isActive"
                    :to="link.path"
                    class="navbar-item"
                  >
                    <span class="icon">
                      <v-icon :icon="link.icon" :fill="link.fill" />
                    </span>
                    <span v-text="link.name" />
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nuxt />
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {
      isActive: false,
      navLinks: [
        {
          name: "Recipes",
          path: "/",
          icon: "book-open",
          fill: "#baed91"
        },
        {
          name: "Sweet",
          path: "/search/sweet",
          icon: "cookie-bite",
          fill: "pink"
        },
        {
          name: "Savoury",
          path: "/search/savoury",
          icon: "drumstick-bite",
          fill: "#ffdd57"
        }
      ],
      dropLinks: [
        {
          name: "About",
          path: "/about",
          icon: "user"
        }
      ]
    }
  },
  computed: {
    isOffline() {
      return this.$store.state.offline
    }
  }
}
</script>
