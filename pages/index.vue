<template>
  <div>
    <v-content>
      <v-container class="pt-0 mt-0">
        <PageDescription></PageDescription>
        <AddNewEvents></AddNewEvents>
        <UserEvents></UserEvents>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import UserPreview from '~/components/user/user-preview.vue'
import AddNewEvents from '~/components/page-blocks/AddNewEvents.vue'
import PageDescription from '~/components/page-blocks/PageDescription.vue'
import UserEvents from '~/components/user/UserEvents.vue'




export default {
fetch ({ store, params }) {
  if (store.state.partyTypes.length === 0 ){
    return new Promise((resolve, reject) => {
      setTimeout( () => {
        console.log('timeout')
        resolve([
          {
            id: '1',
            title: 'wedding',
            link: 'weddings',
            shortDescription:
              'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            description:
              'You can take lovely template of invite? and we will send letters all your guests, give you links to their own invites, and give you usable report ',
            url: 'https://st2.depositphotos.com/3721729/7859/i/450/depositphotos_78592802-stock-photo-wedding-couple-hugging-silhouette-of.jpg'

          },
          {
            id: '2',
            title: 'corporate party',
            link: 'Corporate',
            shortDescription:
              'Lorem ipsum dolor sit amet, consectetur.',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque harum incidunt, possimus repudiandae vel voluptatem.',
            url: 'https://ny.4banket.ru/wp-content/uploads/2017/11/Novogodniy-korporativ-20181.jpg'

          }
        ])
      } ,1000)
    }).then(res => {
      console.log(res)
      store.dispatch('setPartyTypes', res)
    }).catch(e => context.error(e))
  }
},
  components: {
    UserPreview,
    AddNewEvents,
    PageDescription,
    UserEvents
  }
}
</script>

<style>

</style>

