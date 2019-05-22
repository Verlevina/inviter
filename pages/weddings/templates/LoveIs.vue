<template>
  <div class="wrapper pa-5">
<v-container fill-height class="container">
  <v-layout
  wrap>
    <v-flex sm6 xs12>
      <h3 style="font-size: 40px">Love is...</h3>
      <div class="wedding-names">

        <div class="border">
          <div class="border-top"></div>
          <div class="center"><p> {{  inviteInfo.bride.name  + ' ' + inviteInfo.bride.surname + ' ' +
            inviteInfo.bride.fathername}} & {{  inviteInfo.groom.name  + ' ' + inviteInfo.groom.surname + ' ' +
            inviteInfo.groom.fathername}}
            Anastasia
            Petrovna</p></div>
          <div class="border-bottom"></div>
        </div>

      </div>
      <img src="http://wedding-dream.org/wp-content/uploads/2015/02/svadba-v-stile-love-is-1.jpg" alt="">
    <p>...invite you to our wedding!!!</p>
    </v-flex>
   <v-flex sm6 class="info-wrapper">
     <h3>{{inviteInfo.guest.name}}
    {{inviteInfo.guest.surname}}
    {{inviteInfo.guest.fathername}}!
    </h3>
      <p>
        It is with great pleasure that we invite you to a solemn event dedicated to our marriage ceremony.</p>
<img width="100px"
     height="100px"
  src="https://st2.depositphotos.com/2743147/9292/i/450/depositphotos_92920470-stock-photo-heart-isolated-on-white-and.jpg">
<p>
  Which will take place on <strong style="color: red">{{inviteInfo.date}} in {{inviteInfo.time}}</strong></p>
      <p>
        by the address:
      <span> {{inviteInfo.address}} </span>
      </p>
      <p>{{inviteInfo.message}}</p>
      <p>
        We will be happy to see you at our wedding
      </p>
      <v-textarea
        flat
        outline
        v-model="answer.message"
        color="pink"
        name="input-7-4"
        label="You can send your message"
        value=""

      ></v-textarea>
      <v-btn
        color="pink"
        dark
        @click="submitAnswer('yes')"
      >
        I'll definitely come
      </v-btn>

      <v-btn
        flat
        @click="submitAnswer('no')"
      >
        I can'nt come
      </v-btn>
      <v-btn
        outline color="red"
        flat
        class=""
        @click="submitAnswer('maybe')"
      >
        May be i will come
      </v-btn>
    </v-flex>
  </v-layout>
</v-container>

  </div>
</template>

<script>
  export default {
    data(){
      return {
        animate: false,
        inviteInfo: {
          bride: {
            name: 'Kate',
            surname: 'Ivanova',
            fathername: ''
          },
          groom: {
            name: 'Sergei',
            surname: 'Vasin',
            fathername: ''
          },
          guest: {
            name: 'Djo',
            surname: 'Snow',
            fathername: ''
          },
          date: '22-04-2019',
          time: '12:00',
          message: 'We are waiting you',
          address: 'Moskov, st Mira, 6,12',
        },
        answer: {
          message: '',
          isCome: ''
        }
      }
    },
    computed: {
      id() {
        return  this.$route.id
      }
    },
    layout: 'weddings',
    methods: {
      submitAnswer(ans){
        const answer = {
          message: this.answer.message,
          isCome: ans
        }
        console.log(answer)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css?family=EB+Garamond:400,600i,700i&display=swap');
  $fuschia: #ff0081;
  $button-bg: $fuschia;
  $button-text-color: #fff;
  $baby-blue: #f8faff;

  .wrapper {
  font-family: 'EB Garamond', serif;
  font-style: italic;
  font-weight: bold;
  width: 100%;
  height: 100%;
  background: url("https://avatanplus.com/files/resources/mid/5a53830494ca0160d637ca01.png") repeat;
  background-size: 40px;
}
  .wedding-names{
    min-height: 300px;
    padding: 50px;
    color: #fff;
  }
  .container{
    background: #fff;
    height: 100%;
    border-radius: 30px;
  }
.info-wrapper {
  border-left: 1px solid pink;
  padding:30px;
}



  .border {
    background: none;
    padding: 40px;
  }
  .border-top,
  .border-bottom {
    border: 3px solid pink;
    height: 12px;
    position: relative;
  }
  .border-top:before,
  .border-top:after,
  .border-bottom:before,
  .border-bottom:after {
    content: "";
    position: absolute;
    border: 3px solid pink;
    width: 20px;
    height: 20px;
  }
  .border-top:before {
    border-radius: 0 100%;
    left: -26px;
    top: -26px;
  }
  .border-top:after {
    border-radius: 100% 0;
    right: -26px;
    top: -26px;
  }
  .border-bottom:before {
    border-radius: 100% 0;
    left: -26px;
    bottom: -26px;
  }
  .border-bottom:after {
    border-radius: 0 100%;
    right: -26px;
    bottom: -26px;
  }
  .center {
    border-left: 3px solid pink;
    border-right: 3px solid pink;
  }
  .center p {
    margin: 0;
    padding: 40px 30px;
    color: black;
    font-family: 'Open Sans', sans-serif;
    font-style: italic;
    font-weight: 300;
    font-size: 18px;
    text-align: center;
    line-height: 1.5;
  }

</style>
