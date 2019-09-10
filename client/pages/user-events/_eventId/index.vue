<template>
  <v-container fluid>
    <h2
      class="display-2 text-xs-center pb-3"
    > Your {{event.partyType}}</h2>

    <p>selected template: <strong>{{event.templateId}}</strong></p>
    <p>date <strong>{{event.eventInfo.date}}</strong></p>
    <p>time <strong>{{event.eventInfo.time}}</strong></p>
    <p>Bride <strong>{{event.eventInfo.bride.name}} + {{event.eventInfo.bride.surname}} + {{event.eventInfo.bride
      .fathername}}</strong></p>
    <p>Groom <strong>{{event.eventInfo.groom.name}} + {{event.eventInfo.groom.surname}} + {{event.eventInfo.groom
      .fathername}}</strong></p>
    <p>address <strong>{{event.eventInfo.address}}</strong></p>
    <p>message <strong>{{event.eventInfo.message}}</strong></p>

  <guestAnnswerList
    :guests="event.guestsList"
    :answer="answer"
  ></guestAnnswerList>
  </v-container>
</template>
<script>
  import axios from 'axios'
  import guestAnnswerList from '~/components/guests/guestAnnswerList'

  export default {
    asyncData(context) {
      return axios.get(`${context.env.baseUrl}/events/${context.params.eventId}`)
        .then((res) => {

          return {
            event: res.data[0],
          }
        })

    },
    methods: {
      answer(answer) {
        if (answer === '') {
          return {
            text: 'No Answer yet',
            color: 'grey',
            icon: 'alarm'
          }
        }
        if (answer === 'No') {
          return {
            text: 'can`nt come',
              color: 'red',
            icon: 'highlight_off'
          }
        }
        if (answer === 'Maybe') {
          return  {
            text: 'Maybe',
            color: 'yellow',
            icon: 'help_outline'
          }
        }
        return  {
          text: 'yes',
          color: 'green',
          icon: 'check_circle_outline'
        }
      }
    },
    components: {
      guestAnnswerList
    }
  }
</script>
