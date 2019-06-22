<template>
  <v-container fluid>
    <h2
      class="display-2 text-xs-center pb-3"
    > Your event</h2>
    <h1>{{event.partyType}}</h1>
    <p>selected template: <strong>{{event.templateId}}</strong></p>
    <p>date <strong>{{event.eventInfo.date}}</strong></p>
    <p>time <strong>{{event.eventInfo.time}}</strong></p>
    <p>Bride <strong>{{event.eventInfo.bride.name}} + {{event.eventInfo.bride.surname}} + {{event.eventInfo.bride
      .fathername}}</strong></p>
    <p>Groom <strong>{{event.eventInfo.groom.name}} + {{event.eventInfo.groom.surname}} + {{event.eventInfo.groom
      .fathername}}</strong></p>
    <p>address <strong>{{event.eventInfo.address}}</strong></p>
    <p>message <strong>{{event.eventInfo.message}}</strong></p>

    <p
    v-for="guest in event.guestsList"
    :key="guest._id"
    >
      {{guest.name}} + {{guest.surname}} + {{guest.fatherName}}
      ++++ {{guest.email}} +++++++++++++{{  answer(guest.answer.isCome)}}|||||||||||||||||{{guest.answer.message}}
      ----<a
      target="_blank"
      :href="guest.inviteUrl">invite Sheet</a>
    </p>
  </v-container>
</template>
<script>
  import axios from 'axios'
  export default {
    asyncData (context) {
      return axios.get(`${context.env.baseUrl}/events/${context.params.eventId}`)
        .then((res) => {
          return {event: res.data[0]}
        })
    },
    methods: {
      answer(answer) {
        if(answer === '') {
          return 'No Answer yet'
        }
        if(answer === 'No') {
          return 'cannt come'
        }
        if(answer === 'Maybe') {
          return answer        }
        return 'yes'
      }
    }
  }
</script>
