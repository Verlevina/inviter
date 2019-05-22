<template>
  <v-card
    class="card">
    <v-img
      :src="partyType.url"
      height="200px"
      contain
    >
    </v-img>

    <v-card-title primary-title>
      <div>
        <div class="headline">{{partyType.title}}</div>
        <span class="grey--text">  {{partyType.shortDescription}}</span>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-btn flat @click="show = !show">More</v-btn>
      <v-btn flat color="blue" :to="`/${partyType.link}`">Select</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-slide-y-transition>
      <v-card-text v-show="show">
          {{partyType.description}}
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
      partyType: {
        required: true,
        type: Object
      }
    }
  }
</script>

<style scoped lang="scss">
  $hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
  $returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);
  .card:hover {
    transition:
    0.6s $hoverEasing,
    box-shadow 2s $hoverEasing;
    box-shadow:
      rgba(white, 0.2) 0 0 40px 5px,
      rgba(white, 1) 0 0 0 1px,
      rgba(black, 1) 0 80px 100px 0,
      inset white 0 0 0 6px;
  }
</style>
