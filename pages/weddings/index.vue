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
            <WeddingTemplatesPreview
              @selectTemplate="currentTab = 0"></WeddingTemplatesPreview>

            <WedingInfoGetter></WedingInfoGetter>

    </v-container>
  </v-content>
</template>
<script>
  import WeddingTemplatesPreview from '~/components/wedding/WeddingTemplatesPreview.vue'
  import WedingInfoGetter from '~/components/wedding/WedingInfoGetter.vue'
  export default {
    data(){
      return {
        e6: 1
      }
    },
    components: {
      WeddingTemplatesPreview,
      WedingInfoGetter
    },
    methods: {
      selectTemplate(){
        console.log(`[page wedding]  selected template - `)

      }
    }
  }
</script>
