<template>
  <v-container
    grid-list-xl
    fluid>
  <v-layout row wrap>
    <v-flex
      d-flex
      sm3
      v-for="weddingTemplate in weddingTemplates"
      :key="weddingTemplate.title"
    >
      <v-card to="/">
        <v-img
          :src="weddingTemplate.src"

        >
          <v-container
            fill-height
            fluid
            pa-2
          >
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline white--text" v-text="weddingTemplate.title"></span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>favorite</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>bookmark</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>share</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
  export  default  {
    data(){
      return {
        weddingTemplates: [
          {
            title: 'template 1',
            src: 'https://static.wixstatic.com/media/fd83149d8529703ef54f6ae9c7aab39d4e281be276e618788fca14bffa0c72d2.jpg'

          },
          {
            title: 'template 1',
            src: 'https://static.wixstatic.com/media/fd83149d8529703ef54f6ae9c7aab39d4e281be276e618788fca14bffa0c72d2.jpg'

          },
          {
            title: 'template 1',
            src: 'https://static.wixstatic.com/media/fd83149d8529703ef54f6ae9c7aab39d4e281be276e618788fca14bffa0c72d2.jpg'

          },
          {
            title: 'template 1',
            src: 'https://static.wixstatic.com/media/fd83149d8529703ef54f6ae9c7aab39d4e281be276e618788fca14bffa0c72d2.jpg'

          },
          {
            title: 'template 1',
            src: 'https://static.wixstatic.com/media/fd83149d8529703ef54f6ae9c7aab39d4e281be276e618788fca14bffa0c72d2.jpg'

          },
        ]
      }
    }
  }
</script>
