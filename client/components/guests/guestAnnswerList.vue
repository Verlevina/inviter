<template>
  <v-data-table
    :headers="headers"
    :items="guests"
    class="elevation-1"
    rows-per-page-items="5"
    hide-actions
  >
    <template v-slot:items="props">
      <td>{{ props.item.name }}</td>
      <td>{{ props.item.surname }}</td>
      <td>{{ props.item.fathername }}</td>
      <td>
        <v-chip :color="answer(props.item.answer.isCome).color " text-color="white">
          <v-avatar>
            <v-icon> {{ answer(props.item.answer.isCome).icon }}</v-icon>
          </v-avatar>
          {{ answer(props.item.answer.isCome).text }}
        </v-chip>
      </td>
      <td><a
        target="_blank"
        :href="props.item.inviteUrl"
        title="you can answer for your guest">
        <!--TODO:  СДЕЛАТЬ НОРМАЛЬНЫЙ TITLE-->
        invite Sheet
        </a>
      </td>

    </template>
  </v-data-table>
</template>
<script>
  export default {
    props: [
      'guests',
      'answer'
    ],
    data() {
      return {
        headers: [
          {
            text: 'Guest name',
            align: 'left',
            value: 'name',
          },
          {
            text: 'Guest surname',
            align: 'left',

            value: 'name',
          },
          {
            text: 'Guest fathername',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          {
            text: 'answer',
            align: 'left',
            value: 'name',
          },
          {
            text: 'guest invite sheet',
            align: 'left',
            value: 'name',
            sortable: false
          }


        ]
      }
    }

  }
</script>
