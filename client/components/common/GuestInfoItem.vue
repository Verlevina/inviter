<template>
  <div>
    <v-container
      class="info-input--wrapper"
      grid-list-sm
      ma0 pa0>
      <v-form
        ref="form">
        <div class="info-input--counter">
          {{index + 1}}
        </div>
        <v-layout
          row
          wrap>

          <v-flex
            sm3 xs6
            order-xs1
          >
            <v-text-field
              :disabled="disabled"
              outline
              label="Name"
              :rules="[v => !!v || 'Item is required']"
              required
              v-model="guestInfo.name"
            >
            </v-text-field>
          </v-flex>
          <v-flex
            order-xs3
            xs6
            sm2>
            <v-text-field
              :disabled="disabled"
              label="Surname"
              v-model="guestInfo.surname"
            >
            </v-text-field>
          </v-flex>
          <v-flex
            order-xs5
            xs6
            sm2>
            <v-text-field
              :disabled="disabled"
              label="Fathername"
              v-model="guestInfo.fathername"
            >
            </v-text-field>
          </v-flex>
          <v-flex
            order-xs2
            xs6
            sm3>
            <v-text-field
              :disabled="disabled"
              v-model="guestInfo.email"
              :rules="emailRules"
              label="Guest Email"
              type="email"
              outline
              required
            >
            </v-text-field>
          </v-flex>
          <v-flex
            v-if="!disabled"
            order-sm5
            order-xs4
            sm2>

            <v-btn outline fab color="green"

                   small
                   title="update"
                   @click="updateGuest"
            >
              <v-icon>done</v-icon>
            </v-btn>
          </v-flex>
          <v-flex
            v-if="disabled"
            order-sm5
            order-xs4
            sm2>
            <v-btn outline fab color="red"
                   title="delete"
                   @click="deleteGuest"
                   small
            >
              <v-icon>close</v-icon>
            </v-btn>
            <v-btn outline fab color="green"
                   v-if="disabled"
                   small
                   title="update"
                   @click="toggleEdit"
            >
              <v-icon>edit</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-form>

    </v-container>
  </div>
</template>

<script>
  export default {
    props: ['guestInfo', 'index'],
    data() {
      return {
        disabled: true,
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
      toggleEdit(){
        this.disabled = !this.disabled
      },
      updateGuest() {
        this.validate();
        if (this.$refs.form.validate()) {
          console.log(`valid`)
          const guestInfo = {
            id: this.guestInfo.id,
            name: this.guestInfo.name,
            surname: this.guestInfo.surname,
            fathername: this.guestInfo.fathername,
            email: this.guestInfo.email,
            answer: {
              isCome: "",
              message: ""
            }
          }
          this.$store.dispatch('updateGuest', guestInfo)
          this.disabled = !this.disabled
          this.$store.dispatch('setAlert', {
            message: `Guest ${this.guestInfo.name} ${this.guestInfo.surname} ${this.guestInfo.fathername} updated`,
            color: 'green'
          })
        }
      },
      deleteGuest() {
        this.$store.dispatch('deleteGuest', this.guestInfo.id)
        this.$store.dispatch('setAlert', {
          message: `Guest ${this.guestInfo.name} ${this.guestInfo.surname} ${this.guestInfo.fathername} deleted`,
          color: 'red'
        })
      }
    }
  }
</script>
<style scoped>
  .info-input--wrapper {
    position: relative;
    padding: 0;
    margin: 0;
  }

  .info-input--counter {
    position: absolute;
    border-radius: 50%;
    top: 3px;
    left: -24px;
    border-left: 2px solid grey;
    width: 30px;
    height: 30px;
    text-align: center;
  }
</style>
