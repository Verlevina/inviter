<template>
  <v-content>
    <v-container class="pt-0 mt-0">
  <h1 class="display-4 text-xs-center">Weddings</h1>
      <p class="display-1 grey--text text-xs-center mt-5">
        Congratulations with your wedding!!<br>

        To create an event, select a template, please!
      </p>
    </v-container>
    <v-container class="pt-0 mt-0">
      <WeddingTemplatesPreview></WeddingTemplatesPreview>
      <WedingInfoGetter></WedingInfoGetter>
      <GuestListGetter></GuestListGetter>
    </v-container>
  </v-content>
</template>
<script>
  import WeddingTemplatesPreview from '~/components/wedding/WeddingTemplatesPreview.vue'
  import WedingInfoGetter from '~/components/wedding/WeddingInfoGetter.vue'
  import GuestListGetter from '~/components/common/GuestListGetter.vue'

  export default {
    data(){
      return {
        e6: 1
      }
    },
    components: {
      WeddingTemplatesPreview,
      WedingInfoGetter,
      GuestListGetter
    },
    methods: {
      selectTemplate(){
        console.log(`[page wedding]  selected template - `)

      }
    }
  }
</script>
