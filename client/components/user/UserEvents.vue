<template>
  <v-container
    grid-list-md text-xs-center
    fluid>
    <h3 class="display-2 text-xs-center">Your events</h3>
    <v-divider></v-divider>

    <h4 class="display-1 text-xs-center mt-4">Future events</h4>

    <div
      v-if="futureUserEvents.length === 0"
    >
      <p> you have no future events :((</p>
      <v-btn
        color="green"
        dark
        @click="$router.push(`/new-event`)"
      >
        Create new Event!
      </v-btn>

    </div>

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
    <p
      v-if="previosUserEvents.length === 0"
    >
      you have no previos events :((
    </p>
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
import axios from 'axios'
  export default {
    beforeMount () {
      axios.get(`${process.env.baseUrl}${process.env.API.events}`)
        .then( res => {
          this.$store.dispatch('clearUserEvents')
          res.data.forEach(event => {
            this.$store.dispatch('setUserEvent', event)
          } )
        })
        .catch(e => console.error(e))
    },
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

