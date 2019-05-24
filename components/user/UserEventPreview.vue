<template>
  <v-card>
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
      aspect-ratio="2.75"
    ></v-img>

    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{userEvent.eventInfo.bride.name}} & {{userEvent.eventInfo.groom.name}}</h3>
        <p>{{userEvent.partyType}}</p>
        <date> {{ userEvent.eventInfo.date }}</date>
        <time> {{ userEvent.eventInfo.time }}</time>
        <address> {{ userEvent.eventInfo.address }}</address>
        <p> Guests count: {{userEvent.guestsList.length}}</p>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
  export default {
    props: ['userEvent']
  }
</script>

<style scoped lang="scss">
</style>
