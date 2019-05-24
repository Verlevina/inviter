<template>
  <v-container
    grid-list-md text-xs-center
    fluid>
    <h3 class="display-2 text-xs-center">Your events</h3>
    <v-divider></v-divider>

    <h4 class="display-1 text-xs-center mt-4">Future events</h4>
    <v-container
      grid-list-md
      fluid>
      <v-layout
        class="mt-5"
        row
        wrap
        justify-space-around
      >

        <v-flex
          d-flex
          sm6
          xs12
          v-for="futureUserEvent in futureUserEvents"
          :key="futureUserEvent.id"
        >
          <UserEventPreview
            :userEvent="futureUserEvent"
          ></UserEventPreview>
        </v-flex>
      </v-layout>
    </v-container>
    <v-divider></v-divider>
    <h4 class="display-1 text-xs-center mt-4">Pass events</h4>

    <v-container
      grid-list-md
      fluid>
      <v-layout
        row
        wrap
        justify-space-around
      >
        <v-flex
          d-flex
          sm6
          xs12
          v-for="previosUserEvent in previosUserEvents"
          :key="previosUserEvent.id"
        >

          <UserEventPreview
            :userEvent="previosUserEvent"
          ></UserEventPreview>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
  import UserEventPreview from '~/components/user/UserEventPreview'

  export default {
    computed: {
      futureUserEvents() {
        return this.$store.getters.getFutureUserEvents
      },
      previosUserEvents() {
        return this.$store.getters.getPreviosUserEvents
      }
    },
    components: {
      UserEventPreview
    }
  }
</script>

