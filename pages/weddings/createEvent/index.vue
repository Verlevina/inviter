<template>
  <v-content>
    <v-container class="pt-3 mt-0">
      <h1 class="display-3 text-xs-center">Weddings info</h1>
      <p class="display-1 grey--text text-xs-center mt-5">
        To create an event, select a template, please!
      </p>
    </v-container>
    <v-container class="pt-0 mt-0">
      <form>
        <v-subheader>
          Bride
        </v-subheader>

        <v-divider></v-divider>

        <v-text-field
          v-model="bride.name"
          v-validate="'required'"
          :error-messages="errors.collect('brideName')"
          label="Name"
          data-vv-name="brideName"
          required
        ></v-text-field>
        <v-text-field
          v-model="bride.surname"
          label="Surname"
          data-vv-name="surname"
        ></v-text-field>
        <v-text-field
          v-model="bride.fathername"
          label="Surname"
          data-vv-name="surname"
        ></v-text-field>

        <v-subheader>
          Groom
        </v-subheader>

        <v-divider></v-divider>

        <v-text-field
          v-model="groom.name"
          v-validate="'required'"
          :error-messages="errors.collect('name')"
          label="Name"
          data-vv-name="groomName"
          required
        ></v-text-field>
        <v-text-field
          v-model="groom.surname"
          label="Surname"
          data-vv-name="surname"
        ></v-text-field>
        <v-text-field
          v-model="groom.fathername"
          label="Surname"
          data-vv-name="surname"
        ></v-text-field>
        <v-btn @click="submit">submit</v-btn>
      </form>
    </v-container>
  </v-content>
</template>
<script>
  import WeddingTemplatesPreview from '~/components/wedding/WeddingTemplatesPreview.vue'
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'

  Vue.use(VeeValidate)

  export default {
    $_veeValidate: {
      validator: 'new'
    },

    data: () => ({
      bride: {
        name: '',
        surname:'',
        fathername: ''
      },
      groom: {
        name: '',
        surname:'',
        fathername: ''
      },
        custom: {
          groomName: {
            required: () => 'Name can not be empty'
          },
          brideName: {
            required: () => 'Name can not be empty'
          }
        }
    }),

    mounted () {
      this.$validator.localize('en', this.dictionary)
    },

    methods: {
      submit () {
        this.$validator.validateAll()
      },
      clear () {
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = null
        this.$validator.reset()
      }
    }
  }
</script>



