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
    <div>
      you invite <strong> {{event.guestsList.length}}</strong> guests

    </div>

    <v-progress-circular
      v-for = "answerCount in guestsCounter"
      :key="answerCount.color"
      :rotate="270"
      :size="100"
      :width="30"
      :value="answerCount.count * 100 / event.guestsList.length"
      :color="answerCount.color"
    >     {{answerCount.count}}
    </v-progress-circular>

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

          const counter =  res.data[0].guestsList.reduce((acc, guest) => {

            if (guest.answer.isCome === '') {
               acc.noAnswer.count ++;
               return acc

            }
            if (guest.answer.isCome.toUpperCase() === 'NO') {
               acc.no.count++;
              return acc


            }
            if (guest.answer.isCome.toUpperCase() === 'MAYBE') {
              acc.maybe.count ++;
              return acc


            }
             acc.yes.count ++;
            return acc


          }, {
            noAnswer: {
              count: 0,
              color: 'grey'
            },
            yes: {
              count: 0,
              color: 'green'
            },
            no: {
              count: 0,
              color: 'red'
            },
            maybe: {
              count: 0,
              color: 'yellow'
            }
          });

          return {
            event: res.data[0],
            guestsCounter: {
              ...counter
            }
          }
        })

    },
    methods: {
      answer(answer) {
        if (answer.toUpperCase() === '') {
          return {
            text: 'No Answer yet',
            color: 'grey',
            icon: 'alarm'
          }
        }
        if (answer.toUpperCase() === 'NO') {
          return {
            text: 'can`nt come',
            color: 'red',
            icon: 'highlight_off'
          }
        }
        if (answer.toUpperCase() === 'MAYBE') {
          return {
            text: 'Maybe',
            color: 'yellow',
            icon: 'help_outline'
          }
        }
        return {
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
