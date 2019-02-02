<template>
  <div>
    <div v-if="isOffline" class="has-background-dark">
      <div class="container has-text-centered has-text-light has-text-weight-semibold">Offline</div>
    </div>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <div class="navbar-item">
            <nuxt-link to="/">
              <img src="~assets/brand.png" alt="Carole Hector" width="112" height="28">
            </nuxt-link>
          </div>
          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            :class="{'is-active' : isActive}"
            @click="isActive = !isActive"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-end">
          <div class="navbar-menu" :class="{'is-active' : isActive}">
            <nuxt-link
              v-for="(link, index) in navLinks"
              @click.native="isActive = !isActive"
              :key="index"
              :to="link.path"
              class="navbar-item"
            >
              <span class="icon" :class="link.iconColor">
                <i class="fas" :class="link.icon"/>
              </span>
              <span v-text="link.name"/>
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
                    <span class="icon" :class="link.iconColor">
                      <i class="fas" :class="link.icon"/>
                    </span>
                    <span v-text="link.name"/>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nuxt/>
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
          icon: "fa-book-open",
          iconColor: "has-text-green"
        },
        {
          name: "Sweet",
          path: "/search/sweet",
          icon: "fa-cookie-bite",
          iconColor: "has-text-pink"
        },
        {
          name: "Savoury",
          path: "/search/savoury",
          icon: "fa-drumstick-bite",
          iconColor: "has-text-warning"
        }
      ],
      dropLinks: [
        {
          name: "About",
          path: "/about",
          icon: "fa-user",
          iconColor: "has-text-grey"
        },
        {
          name: "Contact",
          path: "/about",
          icon: "fa-phone-square",
          iconColor: "has-text-grey"
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

