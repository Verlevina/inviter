<template>
  <div>
    <v-content>
      <v-container class="pt-0 mt-0">
        <AddNewEvents></AddNewEvents>
      </v-container>
    </v-content>
  </div>
</template>

  <script>
import AddNewEvents from '~/components/page-blocks/AddNewEvents.vue'
import axios from 'axios'

export default {
  components: {
    AddNewEvents
  },
  fetch ({ store, params }) {
    if (store.state.partyTypes.length === 0 ){
      return axios.get("http://127.0.0.1:8080/API/getEventTemplate").then(res => {
        store.dispatch('setPartyTypes', res.data)
      }).catch(e => console.error(e))
    }
  },

}
</script>

<style>

</style>

