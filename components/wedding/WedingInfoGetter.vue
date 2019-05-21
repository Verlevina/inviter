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
              v-model="bride.name"
              @input="validate"
              :rules="[v => !!v || 'Item is required']"
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
              v-model="groom.name"
              @input="validate"
              :rules="[v => !!v || 'Item is required']"
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
              :return-value.sync="date"
              persistent
              lazy
              full-width
              width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date"
                  @input="validate"
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
                v-model="date"
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
              </v-date-picker>
            </v-dialog>
          </v-flex>


          <v-spacer></v-spacer>


          <v-flex xs12 sm6 md4>
            <v-dialog
              ref="dialog2"
              v-model="modal2"
              :return-value.sync="time"
              persistent
              lazy
              full-width
              width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="time"
                  label="Time of wedding"
                  prepend-icon="access_time"
                  @input="validate"
                  :rules="[v => !!v || 'Item is required']"
                  required
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="modal2"
                v-model="time"
                full-width
                color="red lighten-1"
              >
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="modal2 = false">Cancel</v-btn>
                <v-btn flat color="primary" @click="$refs.dialog2.save(time)">OK</v-btn>
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
              v-model="address"
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
              v-model="message"
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
    $_veeValidate: {
      validator: 'new'
    },

    data () {
      return {
      bride: {
        name: '',
        surname: '',
        fathername: ''
      }
    ,
      groom: {
        name: '',
          surname: '',
          fathername: ''
      }
    ,
      date: null,
        time: null,
        address: '',
        message: '',
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
          bride: this.bride,
          groom: this.groom,
          date: this.date,
          time: this.time,
          message: this.message,
          address: this.address,
        }
        console.log(data)
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

