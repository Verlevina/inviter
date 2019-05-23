<template>
  <v-content>
    <v-container class="pt-3 mt-0">
      <h1 class="display-3 text-xs-center">Guests list</h1>
      <p class="display-1 grey--text text-xs-center mt-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In.
      </p>
    </v-container>

    <v-container

      class="pt-0 mt-0">
      <v-form
        lazy-validation
        ref="form"
      >
        <GuestInfoInput>
        </GuestInfoInput>

        <v-layout
        column
        >
          <v-flex
            ma-0
            :key="guestInfo.id"
            v-for="(guestInfo, index) in guestsInfo"
          >
            <GuestInfoItem
              :guestInfo="guestInfo"
              :index="index"
            ></GuestInfoItem>
          </v-flex>
        </v-layout>

      </v-form>
    </v-container>


  </v-content>
</template>
<script>
  import GuestInfoInput from '~/components/common/GuestInfoInput'
  import GuestInfoItem from '~/components/common/GuestInfoItem'

  export default {
    components: {
      GuestInfoInput,
      GuestInfoItem
    },
    data() {
      return {
        template: {
          id: null,
          name: '',
          surname: '',
          fathername: '',
          email: ''
        },
      }
    },
    computed: {
      guestsInfo() {
        return this.$store.getters.getGuestsInfo
      }
    },
    methods: {

    }
  }
</script>
