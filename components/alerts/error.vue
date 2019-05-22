<template>
  <v-alert
    v-if="isAlert"
    :value="true"
    :color="isAlert.type"
    icon="priority_high"
    outline
  >
    {{alert.message}}
  </v-alert>
</template>

<script>
  export default {
    computed: {
      isAlert() {
        return !!alert.message
      },
      alert (){
        return this.$store.getters.alert
      }
    }
  }
</script>
