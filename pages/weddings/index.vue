<template>
  <v-content>
    <v-container class="pt-0 mt-0">
      <h1 class="display-4 text-xs-center">Weddings</h1>
      <p class="display-1 grey--text text-xs-center mt-5">
        Congratulations with your wedding!!<br>
        To create an event, select a template, please!
      </p>
    </v-container>

    <v-stepper v-model="step">
      <v-stepper-header>
        <v-stepper-step
          step="1"
          :complete="this.completeSteps.has(1)"
          color="green">
          Select Template
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          step="2"
          color="green"
          :complete="this.completeSteps.has(2)">
          Wedding info
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          step="3"
          color="success"
          :complete="this.completeSteps.has(3)">
          Guest List
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <WeddingTemplatesPreview
            @selectTemplate="selectTemplate"
          ></WeddingTemplatesPreview>


          <v-btn disabled flat>Back</v-btn>
          <v-btn flat @click="step = 2">Continue</v-btn>

        </v-stepper-content>

        <v-stepper-content step="2">
          <WedingInfoGetter
            @weddingInfoGetterComplete="weddingInfoGetterComplete"
          ></WedingInfoGetter>

          <v-btn @click="step = 1" flat>Back</v-btn>
          <v-btn flat @click="step = 3">Continue</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">

          <GuestListGetter></GuestListGetter>

          <v-layout>
            <v-btn flat disabled>Continue</v-btn>
            <v-btn @click="step = 2" flat>back</v-btn>

            <template>
              <v-layout row justify-center>
                <v-dialog v-model="dialog" width="600px">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-on="on"
                      @click="completeInput"
                      dark
                      color="red">I am ready, let me check Info
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      Congratulations! We are ready to invite your guests!
                    </v-card-title>
                    <v-card-text class="text-xs-center">
                      <p>Please, check all info before accept mail sending!</p>

                      <v-divider></v-divider>
                      Click to look your guests invite sheets in new tab:
                      <a :href='testInviteSheetUrl' target="_blank">Invite Link</a>
                      <h3 class="display-3">Guests list</h3>
                      <GuestsInfoTable></GuestsInfoTable>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="red darken-1" flat="flat" @click="dialog = false">Stop! something wrong!</v-btn>
                      <v-btn color="green darken-1" @click="completeEventCreate">All right! Send Messages!!!</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-layout>
            </template>
          </v-layout>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <CheckDialog
      :dialog="dialog"
    ></CheckDialog>
  </v-content>


</template>
<script>
  import WeddingTemplatesPreview from '~/components/wedding/WeddingTemplatesPreview.vue'
  import GuestsInfoTable from '~/components/common/GuestsInfoTabl.vue'
  import WedingInfoGetter from '~/components/wedding/WeddingInfoGetter.vue'
  import CheckDialog from '~/components/wedding/CheckDialog.vue'
  import GuestListGetter from '~/components/common/GuestListGetter.vue'

  export default {
    data() {
      return {
        step: 0,
        completeSteps: new Set(),
        dialog: false
      }
    },
    components: {
      WeddingTemplatesPreview,
      WedingInfoGetter,
      GuestListGetter,
      CheckDialog,
      GuestsInfoTable
    },
    fetch ({ store, params }) {
      return new Promise((resolve, reject) => {
        setTimeout( () => {
          console.log('timeout')
          resolve({
            wedding: [
              {
                id: '1',
                name: 'LoveIs',
                title: 'template 1',
                src:
                  'https://static.wixstatic.com/media/fd83149d8529703ef54f6ae9c7aab39d4e281be276e618788fca14bffa0c72d2.jpg',
                description: ''
              },
              {
                id: '2',
                name: 'LoveIs',
                title: 'template 2',
                src:
                  'https://cs2.livemaster.ru/storage/4d/ac/f074ba53451200cb97c13dba9cry--svadebnyj-salon-priglashenie-na-svadbu.jpg',
                description: ''
              },
              {
                id: '3',
                name: 'LoveIs',
                title: 'template 1',
                src: 'https://www.crazy-nevesta.ru/upload/resize_cache/iblock/ab7/500_500_2/ab73af12f53991afd875681b40972f77.jpg'

              },
              {
                id: '4',
                name: 'LoveIs',
                title: 'template 1',
                src: 'http://svadba-sovet.ru/wp-content/uploads/2017/06/Priglashenie-na-svadbu-44.jpg'

              },
              {
                id: '5',
                name: 'LoveIs',
                title: 'template 1',
                src: 'https://static.wixstatic.com/media/fd83149d8529703ef54f6ae9c7aab39d4e281be276e618788fca14bffa0c72d2.jpg'

              }
            ],
          })
          } ,1000)
      }).then(res => {
          console.log(res)
          store.dispatch('setTemplates', res)
        }).catch(e => context.error(e))
    },
    methods: {
      selectTemplate() {
        this.step = 2
        this.completeSteps.add(1)
      },
      weddingInfoGetterComplete() {
        this.step = 3
        this.completeSteps.add(2)
      },
      completeInput() {
        for (let i = 1; i <= 3; i++) {
          if (!this.completeSteps.has(i)) {
            this.step = i
            return
          }
        }
        this.dialog = true
        const eventInfo = this.$store.getters.getEventInfo
        console.log(eventInfo)
      },
      completeEventCreate() {
        this.dialog = false
        this.$store.dispatch('sendEventInfo')
        this.$router.push('/')
      }
    },

    computed: {
      selectedTemplateName() {
        return 'LoveIs'
      },
      testInviteSheetUrl() {
        return '/weddings/templates/' + this.selectedTemplateName +
          '?id=test'
      }
    }
  }
</script>
