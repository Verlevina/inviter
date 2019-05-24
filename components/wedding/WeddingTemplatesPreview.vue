<template>
  <v-container
    class="template"
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
      md4
      xs12
      lg3
      xl2
      v-for="weddingTemplate in weddingTemplates"
      :key="weddingTemplate.id"
    >
      <WeddingTemplatePreview
      :card="weddingTemplate"
      @selectTemplate="selectTemplate"
      ></WeddingTemplatePreview>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
  import WeddingTemplatePreview from '~/components/wedding/WeddingTemplatePreview'
  export  default {
    computed: {
      weddingTemplates () {
        return this.$store.getters.getWeddingTemplates
      }
    },
    methods: {
      selectTemplate () {
        this.$emit('selectTemplate')
      }
    },
    components: {
      WeddingTemplatePreview
    }
  }
</script>

