<template>
  <v-toolbar
    class="toolbar"

  >
    <v-toolbar-side-icon
      class="hidden-md-and-up"
      @click.stop="$emit('toggleMenu')"
    ></v-toolbar-side-icon>
    <v-toolbar-title
      @click="$router.push('/')"
    >
      <h2 class="toolbar--title">
        Inviter
      </h2>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        @click="$router.push(`/new-event`)"
        flat>Create event</v-btn>
      <v-btn
        @click="$router.push(`/user-events`)"
        flat>Your events</v-btn>

      <v-btn
        @click="$router.push(`/about`)"
        flat>About Project</v-btn>

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
<style scoped>
  .toolbar{
    z-index: 99;

  }
  .toolbar--title {
    cursor: pointer;
    text-shadow: 1px 1px 1px grey;
  }

  .toolbar--title:hover,
  .toolbar--title:active,
  .toolbar--title:focus {
text-shadow: 3px 3px 3px grey;
  }
</style>
