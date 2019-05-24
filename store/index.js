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
              date: '2019-05-29',
              time: '10-20',
              address: 'Pionerskaya, 10, 30',
              message: 'hello, we are waiting you',
            },
            guestsList: []
          },
          {
            id: 'iddsg11',
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
              date: '2020-05-29',
              time: '10-20',
              address: 'Pionerskaya, 10, 30',
              message: 'hello, we are waiting you',
            },
            guestsList: []
          },
          {
            id: 'iddsg11',
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
              date: '2018-05-29',
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
        color: 'red',
        message: '',
      },
      partyTypes: [],
      templates: {}
    },
    mutations: {
      setPartyTypes (state, partyTypes) {
        state.partyTypes = partyTypes
      },
      setTemplates (state, templates) {
        state.templates = {...templates}
      },
      clearCurrentUserEventInfo(state) {

        state.user.currentEvent = {
          partyType: '',
          templateId: '',
          eventInfo: {
            bride: {
              name: '',
              surname: '',
              fathername: ''
            },
            groom: {
              name: '',
              surname: '',
              fathername: ''
            },
            date: '',
            time: '',
            address: '',
            message: '',
          },
          guestList: []
        }
      },
      deleteGuest(state, guestId){
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
      },

    },
    actions: {
      setPartyTypes (vuexContext, partyTypes) {
        vuexContext.commit('setPartyTypes', partyTypes)
      },
      setTemplates (vuexContext, templates) {
        vuexContext.commit('setTemplates', templates)
      },
      deleteGuest (vuexContext, guestId) {
        vuexContext.commit("deleteGuest", guestId)
      },
      setCurrentEventType (vuexContext, eventInfo) {
        vuexContext.commit("setCurrentEventType", eventInfo)
      },
      setUserEvent (vuexContext, eventInfo) {
        vuexContext.commit("setUserEvent", eventInfo)
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
      sendEventInfo(vuexContext) {
        console.log('send HTTP')
        console.log(vuexContext.state.user.currentEvent)
        vuexContext.commit("clearCurrentUserEventInfo")
      }
    },
    getters: {
      getUserInfo(state) {
        return {
          name: state.user.name,
          email: state.user.email
        }
      },
      getFutureUserEvents (state){
        return state.user.userEvents.filter(event => {
          return new Date(event.eventInfo.date) >= new Date()
        }).sort((a, b) => {
          return new Date(a.eventInfo.date) - new Date(b.eventInfo.date)
        })
      },
      getPreviosUserEvents (state){
        return state.user.userEvents.filter(event => {
          return new Date(event.eventInfo.date) < new Date()
        }).sort((a, b) => {
          return new Date(a.eventInfo.date) - new Date(b.eventInfo.date)
        })
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
        return state.alert
      }
    }
  })
}
export default store
