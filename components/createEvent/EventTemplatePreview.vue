<template>

  <v-card to="/weddings">
    <v-img
      :src="eventTemplate.url"
      height="200px"
    >
    </v-img>

    <v-card-title primary-title>
      <div>
        <div class="headline">{{eventTemplate.title}}</div>
        <span class="grey--text">  {{eventTemplate.shortDescription}}</span>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-btn flat>Share</v-btn>
      <v-btn flat color="blue">Explore</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-slide-y-transition>
      <v-card-text v-show="show">
          {{eventTemplate.description}}
      </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script>
  export default {

    data(){
      return {
        show: false,

      }
    },
    props: {
      eventTemplate: {
        required: true,
        type: Object
      }
    }
  }
</script>
<style scoped>

</style>
