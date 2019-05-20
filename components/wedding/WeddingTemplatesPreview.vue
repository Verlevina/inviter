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
      ></WeddingTemplatePreview>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
  import WeddingTemplatePreview from '~/components/wedding/WeddingTemplatePreview'
  export  default {
    data() {
      return {
        weddingTemplates: [
          {
            id: '1',
            title: 'template 1',
            src:
              'https://static.wixstatic.com/media/fd83149d8529703ef54f6ae9c7aab39d4e281be276e618788fca14bffa0c72d2.jpg',
            description: ''
          },
          {
            id: '2',
            title: 'template 2',
            src: 'https://cs2.livemaster.ru/storage/4d/ac/f074ba53451200cb97c13dba9cry--svadebnyj-salon-priglashenie-na-svadbu.jpg'

          },
          {
            id: '3',
            title: 'template 1',
            src: 'https://www.crazy-nevesta.ru/upload/resize_cache/iblock/ab7/500_500_2/ab73af12f53991afd875681b40972f77.jpg'

          },
          {
            id: '4',
            title: 'template 1',
            src: 'http://svadba-sovet.ru/wp-content/uploads/2017/06/Priglashenie-na-svadbu-44.jpg'

          },
          {
            id: '5',
            title: 'template 1',
            src: 'https://static.wixstatic.com/media/fd83149d8529703ef54f6ae9c7aab39d4e281be276e618788fca14bffa0c72d2.jpg'

          },
        ]
      }
    },
    components: {
      WeddingTemplatePreview
    }
  }
</script>

