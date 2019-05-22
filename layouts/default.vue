<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="drawer"
    >
      <UserPreview></UserPreview>

      <v-divider></v-divider>
      <v-list>

        <v-list-tile
          class="navigation--item"
        >
          <v-list-tile-avatar>
            <i class="material-icons">
              event
            </i>
          </v-list-tile-avatar>

          <v-list-tile-content>

            <v-list-tile-title>Your events</v-list-tile-title>
            <v-list-tile-sub-title >List of nearest events</v-list-tile-sub-title>

          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile
          class="navigation--item"
        >
          <v-list-tile-avatar>
            <i class="material-icons">
              add_circle_outline
            </i>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title @click="$router.push(`/new-event`)">Create event</v-list-tile-title>
            <v-list-tile-sub-title ></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile
          class="navigation--item"
        >
          <v-list-tile-avatar>
            <i class="material-icons">
              filter
            </i>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title @click="$router.push('/templates')">Templates</v-list-tile-title>
            <v-list-tile-sub-title>List of the best events templates</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile
          class="navigation--item"
        >
          <v-list-tile-avatar>
            <i class="material-icons">
              face
            </i>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>About Project</v-list-tile-title>
            <v-list-tile-sub-title ></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    <ToolBar
      app
      fixed
      inverted-scroll
      @toggleMenu="drawer=!drawer"
    ></ToolBar>
    <nuxt/>
  </div>
</template>
<script>
  import UserPreview from '~/components/user/user-preview.vue'
  import ToolBar from '~/components/navigation/ToolBar.vue'
  export default {
    data() {
      return {
        drawer: false
      }
    },
    components: {
      ToolBar,
      UserPreview
    }
  }
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
  .drawer {
    z-index: 999
  }
</style>

