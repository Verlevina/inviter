<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
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
            <v-list-tile-title>Create event</v-list-tile-title>
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
            <v-list-tile-title>Templates</v-list-tile-title>
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

    <v-content>
      <v-container class="pt-0 mt-0">
        <PageDescription></PageDescription>
        <AddNewEvents></AddNewEvents>
      </v-container>
    </v-content>




    <v-footer app>footer</v-footer>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import ToolBar from '~/components/navigation/ToolBar.vue'
import UserPreview from '~/components/user/user-preview.vue'
import AddNewEvents from '~/components/page-blocks/AddNewEvents.vue'
import PageDescription from '~/components/page-blocks/PageDescription.vue'



export default {
  data() {
    return {
      drawer: false
    }
  },
  components: {
    AppLogo,
    ToolBar,
    UserPreview,
    AddNewEvents,
    PageDescription
  }
}
</script>

<style>

</style>

