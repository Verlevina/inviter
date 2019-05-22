<template>
  <v-content>
    <v-container class="pt-3 mt-0">
      <h1 class="display-3 text-xs-center">Weddings info</h1>
      <p class="display-1 grey--text text-xs-center mt-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In.
      </p>
    </v-container>
    <v-container
      grid-list-xl
      class="pt-0 mt-0">
      <v-form
        lazy-validation
        ref="form"
        v-model="valid"
      >
        <v-layout
          wrap
        >
          <v-flex
            sm6
            xs12
          >
            <v-subheader>
              Bride
            </v-subheader>

            <v-divider></v-divider>

            <v-text-field
              v-model="currentUserEventInfo.bride.name"
              @input="validate"
              :rules="[v => !!v || 'Item is required']"
              label="Name"
              data-vv-name="brideName"
              required
            ></v-text-field>
            <v-text-field
              v-model="currentUserEventInfo.bride.surname"
              label="Surname"
              data-vv-name="surname"
            ></v-text-field>
            <v-text-field
              v-model="currentUserEventInfo.bride.fathername"
              label="Surname"
              data-vv-name="surname"
            ></v-text-field>
          </v-flex>


          <v-flex
            sm6
            xs12
          >
            <v-subheader>
              Groom
            </v-subheader>

            <v-divider></v-divider>

            <v-text-field
              v-model="currentUserEventInfo.groom.name"
              @input="validate"
              :rules="[v => !!v || 'Item is required']"
              label="Name"
              data-vv-name="groomName"
              required
            ></v-text-field>
            <v-text-field
              v-model="currentUserEventInfo.groom.surname"
              label="Surname"
              data-vv-name="surname"
            ></v-text-field>
            <v-text-field
              v-model="currentUserEventInfo.groom.fathername"
              label="Fathername"
              data-vv-name="fathername"
            ></v-text-field>

          </v-flex>
        </v-layout>

        <v-layout>

          <v-flex xs12 sm6 md4>
            <v-dialog
              ref="dialog"
              v-model="modal"
              :return-value.sync="currentUserEventInfo.date"
              persistent
              lazy
              full-width
              width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="currentUserEventInfo.date"

                  :rules="[v => !!v || 'Item is required']"
                  label="Date of wedding"
                  prepend-icon="event"
                  required
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                :allowed-dates="allowedDates"
                color="red lighten-1"
                header-color="red"
                v-model="currentUserEventInfo.date"
                scrollable
                reactive
              >
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                <v-btn flat color="primary" @click="$refs.dialog.save(currentUserEventInfo.date)">OK</v-btn>
              </v-date-picker>
            </v-dialog>
          </v-flex>


          <v-spacer></v-spacer>


          <v-flex xs12 sm6 md4>
            <v-dialog
              ref="dialog2"
              v-model="modal2"
              :return-value.sync="currentUserEventInfo.time"
              persistent
              lazy
              full-width
              width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="currentUserEventInfo.time"
                  label="Time of wedding"
                  prepend-icon="access_time"
                  :rules="[v => !!v || 'Item is required']"
                  required
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="modal2"
                v-model="currentUserEventInfo.time"
                full-width
                color="red lighten-1"
              >
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="modal2 = false">Cancel</v-btn>
                <v-btn flat color="primary" @click="$refs.dialog2.save(currentUserEventInfo.time)">OK</v-btn>
              </v-time-picker>
            </v-dialog>
          </v-flex>

        </v-layout>
        <v-layout>
          <v-flex
            xs12 sm6
          >
            <v-textarea
              name="address"
              @input="validate"
              :rules="[v => !!v || 'Item is required']"
              required
              box
              label="Merrage address"
              auto-grow
              v-model="currentUserEventInfo.address"
            ></v-textarea>
          </v-flex>
          <v-flex
            xs12 sm6
          >
            <v-textarea
              name="message"
              box
              label="Short message to your guests, if you want"
              auto-grow
              v-model="currentUserEventInfo.message"
            ></v-textarea>
          </v-flex>
        </v-layout>
        <v-btn
          @click="submit">submit</v-btn>
      </v-form>
    </v-container>
  </v-content>
</template>
<script>



  export default {
    data () {
      return {
        menu: false,
        modal: false,
        modal2: false,
        menu2: false,
        valid: false,
        rules: {
        required: value => !!value || 'Required'
      }
    }
    },
    computed: {
      currentUserEventInfo () {
        const currentUserEventInfo = this.$store.getters.getCurrentUserEventInfo
        console.log(currentUserEventInfo)
        return {
          bride: {
            name: currentUserEventInfo.eventInfo.bride.name || '',
            surname: currentUserEventInfo.eventInfo.bride.surname || '',
            fathername:  currentUserEventInfo.eventInfo.bride.fathername || '',
          }
          ,
          groom: {
            name:  currentUserEventInfo.eventInfo.groom.name || '',
            surname: currentUserEventInfo.eventInfo.groom.surname || '',
            fathername:  currentUserEventInfo.eventInfo.groom.fathername || '',
          }
          ,
          date: currentUserEventInfo.eventInfo.date || '',
          time: currentUserEventInfo.eventInfo.time || '',
          address: currentUserEventInfo.eventInfo.address || '',
          message: currentUserEventInfo.eventInfo.message || '',
        }
      }
    },
    methods: {
      allowedDates: (date) => {
        const dateArr = date.split('-')
        const moment = new Date()
        return +dateArr[0] >= +moment.getFullYear() && +dateArr[1] >= +moment.getMonth()  && +dateArr[2] >= +moment.getDate()
      },
      validate () {
        if (this.$refs.form.validate()) {
          this.valid = true
        }
      },
      submit() {
        this.validate();
      if(this.$refs.form.validate()){
        const data = {
          bride: this.currentUserEventInfo.bride,
          groom: this.currentUserEventInfo.groom,
          date: this.currentUserEventInfo.date,
          time: this.currentUserEventInfo.time,
          message: this.currentUserEventInfo.message,
          address: this.currentUserEventInfo.address,
        }
        this.$store.dispatch('setCurrentUserEventInfo', data)
      }
      }
    }
  }
</script>

<style>
  .v-messages__message {
    color: red
  }
</style>

