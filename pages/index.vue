<template>
  <div>
    <ToolBar
      app
      @toggleMenu="drawer=!drawer"
    ></ToolBar>
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

    <v-content>
      <v-container fluid>
        <section class="container">
          <h1 class="display-3">
            Inviter
          </h1>
          <h2 class="display-1">
            This is the project that will help people to create invites to a lot of events like weddings, parties and so on.
          </h2>
        </section>
      </v-container>
    </v-content>
    <v-footer app></v-footer>

  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import ToolBar from '~/components/navigation/ToolBar.vue'
import UserPreview from '~/components/user/user-preview.vue'



export default {
  data() {
    return {
      drawer: false
    }
  },
  components: {
    AppLogo,
    ToolBar,
    UserPreview
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
  .navigation--item:hover,
  .navigation--item:active,
  .navigation--item:focus {
    background-color: #ccc;

  }

</style>

