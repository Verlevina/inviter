<template>

    <v-card

  class= "card"
  @click="$router.push(`/user-events/${userEvent._id}`)"

  >
    <v-img
      :src="userEvent.templateUrl"
      aspect-ratio="2.75"
    ></v-img>

    <v-card-title
      primary-title
      class="event-info--wrapper">
        <h3 class="headline mb-0">{{userEvent.eventInfo.bride.name}} & {{userEvent.eventInfo.groom.name}}</h3>
        <p>{{userEvent.partyType}}</p>
        <span> {{ userEvent.eventInfo.date }}</span>
        <span> {{ userEvent.eventInfo.time }}</span>
        <address> {{ userEvent.eventInfo.address }}</address>
        <p> Guests count: {{userEvent.guestsList.length}}</p>
    </v-card-title>
  </v-card>
</template>

<script>
  export default {
    props: ['userEvent']
  }
</script>

<style scoped lang="scss">
  $hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
  $returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);
  .card {
    cursor: pointer;
  }
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
  .event-info--wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
