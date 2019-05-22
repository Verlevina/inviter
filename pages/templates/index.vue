<template>
  <v-content>
    <v-container class="pt-0 mt-0">
      <h1 class="display-4 text-xs-center">All our templates</h1>
      <p class="display-1 grey--text text-xs-center mt-5">
        Here you can see all our templates<br>
        To create an event, select a template, please!
      </p>
      <h2 class="display-3 grey--text mt-5"> Weddings</h2>
      <WeddingTemplatesPreview></WeddingTemplatesPreview>
      <h2 class="display-3 grey--text mt-5"> Corporate parties</h2>
    </v-container>
  </v-content>
</template>
<script>
  import WeddingTemplatesPreview from '~/components/wedding/WeddingTemplatesPreview'
  export default {
    components: {
      WeddingTemplatesPreview
    }
  }
</script>
