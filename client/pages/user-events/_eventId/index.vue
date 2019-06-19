<template>
  <v-container fluid>
    <h2
      class="display-2 text-xs-center pb-3"
    > Your event</h2>
    <h1>{{event.eventInfo.bride.name}} + {{event.eventInfo.groom.name}} </h1>
  </v-container>
</template>
<script>
  export default {
    async asyncData({req, res}) {
      let event;
     event =   new Promise((resolve, reject) => {
        setTimeout((id) => {
          resolve({
              event: {
                id: id,
                partyType: 'wedding',
                templateId: '1',
                eventInfo: {
                  bride: {
                    name: 'Veronika',
                    surname: '',
                    fathername: ''
                  }
                  ,
                  groom: {
                    name: 'Denis',
                    surname: '',
                    fathername: ''
                  }
                  ,
                  date: '2018-05-29',
                  time: '10-20',
                  address: 'Pionerskaya, 10, 30',
                  message: 'hello, we are waiting you',
                },
                guestsList: []
              }
            })
        }, 2000)
      }).then(event => {
        return {...event}
      })
return event

    }
  }
</script>
