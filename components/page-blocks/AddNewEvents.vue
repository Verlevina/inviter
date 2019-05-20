<template>
  <v-container fluid>
    <h2
    class="display-2 text-xs-center pb-3"
    > Add new event!</h2>
  <v-container
    grid-list-xl
    fluid>
    <v-layout
      row wrap
    >
      <v-flex
        d-flex
        sm6
        v-for="eventTemplate of eventTemplates"
        :key = eventTemplate.key>
        <EventTemplatePreview
          :eventTemplate="eventTemplate"
        ></EventTemplatePreview>
      </v-flex>
    </v-layout>
  </v-container>
  </v-container>
</template>
<script>


  import EventTemplatePreview from '~/components/createEvent/EventTemplatePreview.vue'
  export default {
    data() {
      return {
        eventTemplates: [
          {
            id: '1',
            title: 'Wedding',
            shortDescription:
              'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            description:
              'You can take lovely template of invite? and we will send letters all your guests, give you links to their own invites, and give you usable report ',
            url: 'https://st2.depositphotos.com/3721729/7859/i/450/depositphotos_78592802-stock-photo-wedding-couple-hugging-silhouette-of.jpg'
          },
          {
            id: '2',
            title: 'Corporate party',
            shortDescription:
              'Lorem ipsum dolor sit amet, consectetur.',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque harum incidunt, possimus repudiandae vel voluptatem.',
            url: 'https://ny.4banket.ru/wp-content/uploads/2017/11/Novogodniy-korporativ-20181.jpg'
          }
        ]
      }
    },
    components: {
      EventTemplatePreview
    }
  }
</script>
