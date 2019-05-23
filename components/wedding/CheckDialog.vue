<template>
  <v-layout row justify-center>
    <v-dialog v-if="dialog" width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Use Google's location service?</span>
        </v-card-title>
        <v-card-text>Lorem ipsum era
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click="dialog = false">Disagree</v-btn>
          <v-btn color="green darken-1" flat="flat" @click="dialog = false">Agree</v-btn>
        </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    data(){
      return {
        dialog: true
      }
    }
  }
</script>
