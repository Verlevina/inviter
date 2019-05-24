<template>

    <v-data-table
      :headers="headers"
      :items="guestsInfo"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td  class="text-xs-right">{{ props.item.name }}</td>
        <td class="text-xs-right">{{  props.item.surname }}</td>
        <td class="text-xs-right">{{  props.item.fathername }}</td>
        <td class="text-xs-right">{{  props.item.email }}</td>
      </template>
    </v-data-table>

</template>


<script>
  export default {
    computed: {
      guestsInfo() {
        return this.$store.getters.getGuestsInfo
      }
    },
    data () {
      return {
        headers: [
          {
            text: 'Name',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          { text: 'Surname', value: 'Surnname' ,
            align: 'left',
            sortable: false,},
          { text: 'Fathername', value: 'FatherName',
            align: 'left',
            sortable: false,},
          { text: 'Email', value: 'email',
            align: 'left',
            sortable: false,}
        ]
      }
    }
  }
</script>
