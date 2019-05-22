<template>
  <v-content>
    <v-container class="pt-3 mt-0">
      <h1 class="display-3 text-xs-center">Guests list</h1>
      <p class="display-1 grey--text text-xs-center mt-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In.
      </p>
    </v-container>

    <v-container
      grid-list-md
      class="pt-0 mt-0">
      <v-form
        lazy-validation
        ref="form"
        v-model="valid"
      >
        <GuestInfoInput>
        </GuestInfoInput>

            <GuestInfoItem
              :guestsInfo="guestsInfo"
            ></GuestInfoItem>

      </v-form>
    </v-container>

    <v-btn color="red">I am ready, let me check Info</v-btn>
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
      guestsInfo () {
        return this.$store.getters.getGuestsInfo
      }
    }
  }
</script>
