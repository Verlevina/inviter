<template>
  <v-container fluid>
    <h2
    class="display-2 text-xs-center pb-3"
    > Add new event!</h2>
  <v-container
    grid-list-xl
    fluid>
    <v-layout
      row wrap
    >
      <v-flex
        d-flex
        sm6
        v-for="partyType of partyTypes"
        :key = partyType.id>
        <EventTemplatePreview
         :partyType="partyType">
        </EventTemplatePreview>
      </v-flex>
    </v-layout>
  </v-container>
  </v-container>
</template>
<script>


 import EventTemplatePreview from '~/components/createEvent/EventTemplatePreview.vue'
  export default {
    computed: {
      partyTypes() {
        return this.$store.getters.getPartyType
      }
    },
    components: {
      EventTemplatePreview
    }
  }
</script>
