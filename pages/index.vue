<template>
  <div>


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
import UserPreview from '~/components/user/user-preview.vue'
import AddNewEvents from '~/components/page-blocks/AddNewEvents.vue'
import PageDescription from '~/components/page-blocks/PageDescription.vue'



export default {

  components: {
    UserPreview,
    AddNewEvents,
    PageDescription
  }
}
</script>

<style>

</style>

