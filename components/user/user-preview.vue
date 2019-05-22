<template>
  <v-list
    class="pa-1"
  >
      <v-list-tile-content>

        <v-list-tile
          avatar
          @click="$router.push('/')"
        >
          <v-list-tile-avatar>
            <img :src="getUserAvatar">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title> {{userInfo.name}} </v-list-tile-title>
            <v-list-tile-sub-title > {{userInfo.email}} </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list-tile-content>
  </v-list>
</template>
<script>
  export default {
    computed: {
      userInfo() {
        return this.$store.getters.getUserInfo
      },
      getUserAvatar () {
        return 'https://randomuser.me/api/portraits/lego/' + Math.ceil( Math.random()*5 )+ '.jpg'
      }
    }
  }
</script>
