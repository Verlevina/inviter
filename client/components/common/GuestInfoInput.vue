<template>
  <div class="info-input--wrapper">
    <v-container grid-list-md>
      <v-form
        ref="form"
      >
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field
              outline
              label="Name"
              :rules="[v => !!v || 'Item is required']"
              required
              v-model="guestInfo.name"
            >
            </v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              label="Surname"
              v-model="guestInfo.surname"
            >
            </v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              label="Fathername"
              v-model="guestInfo.fathername"
            >
            </v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              v-model="guestInfo.email"
              :rules="emailRules"
              label="Guest Email"
              type="email"
              outline
              required
            >
            </v-text-field>
          </v-flex>
        </v-layout>
      </v-form>
      <v-btn
        @click="updateGuest"
        color="red"
        dark
      >
        Add guest
      </v-btn>
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        guestInfo: {
          name:'',
          surname:'',
          fathername:'',
          email: ''
        },
        valid: false,
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
      }
    },
    methods: {
      validate() {
        if (this.$refs.form.validate()) {
          this.valid = true
        }
      },
      updateGuest() {
        this.validate();
        if (this.$refs.form.validate()) {
          console.log(`valid`)

          const inviteUrl = `${process.env.baseUrl}`
          const guestInfo = {
            id:  this.guestInfo.id,
            name: this.guestInfo.name,
            surname: this.guestInfo.surname,
            fathername: this.guestInfo.fathername,
            email: this.guestInfo.email,
            inviteUrl
          }
          this.$store.dispatch('setNewGuest', guestInfo)
          this.$store.dispatch('setAlert', {
            message: 'Guest upload',
            color: 'green'
          })
          this.guestInfo = {
            id:  '',
            name: '',
            surname: '',
            fathername: '',
            email: ''
          }
        }
      }
    }
  }
</script>
<style scoped>
  .info-input--wrapper {
    border: 3px solid grey;
    border-radius: 5px;
    padding: 20px
  }
</style>
