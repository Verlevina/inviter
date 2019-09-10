<template>
  <div>
    <v-content>
      <v-container class="pt-0 mt-0">
        <PageDescription></PageDescription>
        <AddNewEvents></AddNewEvents>
        <UserEvents></UserEvents>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import UserPreview from '~/components/user/user-preview.vue'
import AddNewEvents from '~/components/page-blocks/AddNewEvents.vue'
import PageDescription from '~/components/page-blocks/PageDescription.vue'
import UserEvents from '~/components/user/UserEvents.vue'
import axios from "axios"

export default {
fetch ({ store, params }) {
    return axios.get(`${process.env.baseUrl}${process.env.API.partyTypes}`)
      .then(res => {
      store.dispatch('setPartyTypes', res.data)
    })
      .catch(e => console.error(e))
},
  components: {
    UserPreview,
    AddNewEvents,
    PageDescription,
    UserEvents
  }
}
</script>
