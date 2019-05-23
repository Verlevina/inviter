import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
//import Cookie from "js-cookie";

Vue.use(Vuex)
const store = () => {
  return new Vuex.Store({
    state: {
      user: {
        name: 'Вероника',
        email: 'levitinava@gmail.com',
        userEvents: [
          {
            id: 'id11',
            partyType: 'wedding',
            templateId: '1',
            eventInfo: {
              bride: {
                name: 'Veronika',
                surname: '',
                fathername: ''
              }
              ,
              groom: {
                name: 'Denis',
                surname: '',
                fathername: ''
              }
              ,
              date: '22-04-2019',
              time: '10-20',
              address: 'Pionerskaya, 10, 30',
              message: 'hello, we are waiting you',
            },
            guestsList: []
          },
        ],
        currentEvent: {
          partyType: '',
          templateId: '',
          eventInfo: {
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
            date: '',
            time: '',
            address: '',
            message: '',
        },
          guestList: []
      }
      },
      alert: {
        type: 'warning',
        message: 'заполните все поля',
      },
      partyTypes: [
        {
          id: '1',
          title: 'wedding',
          link: 'weddings',
          shortDescription:
            'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          description:
            'You can take lovely template of invite? and we will send letters all your guests, give you links to their own invites, and give you usable report ',
          url: 'https://st2.depositphotos.com/3721729/7859/i/450/depositphotos_78592802-stock-photo-wedding-couple-hugging-silhouette-of.jpg'

        },
        {
          id: '2',
          title: 'corporate party',
          link: 'Corporate',
          shortDescription:
            'Lorem ipsum dolor sit amet, consectetur.',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque harum incidunt, possimus repudiandae vel voluptatem.',
          url: 'https://ny.4banket.ru/wp-content/uploads/2017/11/Novogodniy-korporativ-20181.jpg'

        }
      ],
      templates: {
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
        corporate: []
      }
    },
    mutations: {
      deleteGuest(state, guestId){
        console.log(guestId)
        const guestIndex = state.user.currentEvent.guestList.findIndex(guest => {
          return guest.id = guestId
        })
        state.user.currentEvent.guestList.splice(guestIndex, 1)
      },
      setUserEvent(state) {
        state.user.userEvents.push(state.user.currentEvent)
      },
      setNewGuest(state, guest) {
          state.user.currentEvent.guestList.push(guest)
      },
      updateGuest(state, guest) {
        const currentGuestIndex = state.user.currentEvent.guestList.findIndex(guestItem => {
          return guestItem.id === guest.id
        })
          state.user.currentEvent.guestList[currentGuestIndex] = guest
      },
      setCurrentUserEventInfo(state, payload) {
        console.log(payload)
        Object.keys(payload).forEach(item => {
          state.user.currentEvent[item] = payload[item]
        })
      },
      setCurrentEventType(state, partyType) {
        state.user.currentEvent.partyType = partyType
      }
    },
    actions: {
      deleteGuest (vuexContext, guestId) {
        vuexContext.commit("deleteGuest", guestId)
      },
      setCurrentEventType (vuexContext, eventInfo) {
        vuexContext.commit("setCurrentEventType", eventInfo)
      },
      setUserEvent (vuexContext, eventInfo) {
        vuexContext.commit("setUserEvent", eventInfo)
        console.log('ajax request')
        console.log(eventInfo)
      },
      setCurrentUserEventInfo (vuexContext, eventInfo) {
        vuexContext.commit("setCurrentUserEventInfo", eventInfo)
      },
      setNewGuest(vuexContext, guest) {
        guest.id = vuexContext.state.user.currentEvent.guestList.length + 1
        vuexContext.commit("setNewGuest", guest)
      },
      updateGuest(vuexContext, guest) {
        vuexContext.commit("updateGuest", guest)
      },
    },
    getters: {
      getUserInfo(state) {
        return {
          name: state.user.name,
          email: state.user.email
        }
      },
      getCurrentUserEventInfo (state) {
        return state.user.currentEvent
      },
      getUserEvents(state) {
        return state.user.events
      },
      getPartyType(state) {
        return state.partyTypes
      },
      getWeddingTemplates (state) {
        return state.templates.wedding
      },
      getGuestsInfo (state) {
        return state.user.currentEvent.guestList
      },
      getEventInfo (state) {
        return state.user.currentEvent
      },
      getAlert (state) {
        console.log(state.alert)
        return state.alert
      }
    }
  })
}
export default store
