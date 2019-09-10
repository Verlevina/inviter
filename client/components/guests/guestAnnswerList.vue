<template>
  <v-data-table
    :headers="headers"
    :items="guests"
    class="elevation-1"
  >
    <template v-slot:items="props">
      <td>{{ props.item.name }}</td>
      <td>{{ props.item.surname }}</td>
      <td>{{ props.item.fathername }}</td>
      <td>
        <v-chip :color="answer(props.item.answer.isCome).color " text-color="white">
          <v-avatar>
            <v-icon> {{  answer(props.item.answer.isCome).icon }}</v-icon>
          </v-avatar>
          {{  answer(props.item.answer.isCome).text }}
        </v-chip>
      </td>
      <td><a
        target="_blank"
        :href="props.item.inviteUrl">invite Sheet</a></td>

    </template>
  </v-data-table>
</template><script>
  export default {
   props: [
     'guests',
     'answer'
   ],
    data(){
     return {
       headers: [
         {
           text: 'Guest name',
           align: 'left',
           value: 'name',
         }
         ]
     }
    }

  }
</script>
