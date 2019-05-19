<template>
  <v-toolbar>
    <v-toolbar-side-icon
      class="hidden-md-and-up"
      @click="$emit('toggleMenu')"
    ></v-toolbar-side-icon>
    <v-toolbar-title>
      <h2>
        Inviter
      </h2>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Your events</v-btn>
      <v-btn flat>Create event</v-btn>
      <v-btn flat>Templates</v-btn>
      <v-btn flat>About Project</v-btn>

      <UserPreview></UserPreview>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
  import UserPreview from '~/components/user/user-preview.vue'

  export default {
    components: {
      UserPreview
    }
  }
</script>
