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
        userEvents: [],
        inviteTestLink: '',
        inviteTestId: '',
        currentEvent: {
          partyType: '',
          templateId: '',
          complete: false,
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
          guestsList: []
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
      clearUserEvents (state) {
        state.user.userEvents = []
      },
      completeCreatingEvent(state) {
        state.user.currentEvent.complete = true
      },
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
          complete:false,
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
          guestsList: []
        }
      },
      deleteGuest(state, guestId){
        const guestIndex = state.user.currentEvent.guestsList.findIndex(guest => {
          return guest.id = guestId
        })
        state.user.currentEvent.guestsList.splice(guestIndex, 1)
      },
      setUserEvent(state, event) {
        state.user.userEvents.push(event)
      },
      setNewGuest(state, guest) {
          state.user.currentEvent.guestsList.push(guest)
      },
      updateGuest(state, guest) {
        const currentGuestIndex = state.user.currentEvent.guestsList.findIndex(guestItem => {
          return guestItem.id === guest.id
        })
          state.user.currentEvent.guestsList[currentGuestIndex] = guest
      },
      setCurrentUserEventInfo(state, payload) {
        Object.keys(payload).forEach(item => {
          state.user.currentEvent[item] = payload[item]
        })
      },
      setCurrentEventType(state, partyType) {
        state.user.currentEvent.partyType = partyType
      },
      setAlert (state, alert) {
        state.alert = {...alert}
      },
      clearAlert (state) {
        state.alert = {
          color: 'red',
            message: '',
        }
      },
      addUserEvent(state, userEvent) {
        state.user.userEvents.push(userEvent)
      },
      updateInviteTestLink(state, link) {
        state.user.inviteTestLink = link

      } ,
      updateInviteTestId(state, id) {
        state.user.inviteTestid = id

      },
      completeEvent(state) {
        state.user.currentEvent.complete = true
      }
    },
    actions: {
      clearUserEvents (vuexContext) {
        vuexContext.commit('clearUserEvents')
      },
      completeEvent (vuexContext) {
        vuexContext.commit('completeEvent')
      },

      setAlert(vuexContext, alert){
        vuexContext.commit('setAlert', alert)
        setTimeout(()=>{
          vuexContext.commit('clearAlert')
        }, 3000)
      },
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
        guest.id = vuexContext.state.user.currentEvent.guestsList.length + 1
        vuexContext.commit("setNewGuest", guest)
      },
      updateGuest(vuexContext, guest) {
        vuexContext.commit("updateGuest", guest)
      },
      sendEventInfo(vuexContext) {
        console.log('send HTTP')
        axios.post(`${process.env.baseUrl}${process.env.API.events}`,vuexContext.state.user.currentEvent)
          .then(res => {
            const currentEvent = vuexContext.state.user.currentEvent
            currentEvent._id = res.data.id
            vuexContext.commit('setCurrentUserEventInfo', currentEvent)
            const color = res.data.status === 'success' ? 'green' : 'red';
            vuexContext.commit('updateInviteTestLink', `${process.env.baseUrl}/invite?id=${res.data.id}&guestId=${res.data.guestId}`)
            vuexContext.commit('updateInviteTestId', res.data.id)
            vuexContext.dispatch('setAlert', {
            message: res.data.message,
            color
          })
        })
      },
      sendUpdateEventInfo(vuexContext) {
        vuexContext.commit('completeCreatingEvent')
        axios.post(`${process.env.baseUrl}${process.env.API.events}`, vuexContext.state.user.currentEvent)
          .then(res => {
            const color = res.data.status === 'success' ? 'green' : 'red';
            vuexContext.dispatch('setAlert', {
              message: res.data.message,
              color
            })
          })

        vuexContext.commit("clearCurrentUserEventInfo")
      },
      deleteEventReq (vuexContext) {
        console.log(`deleteEvent request`)
        console.log(vuexContext.state.user.inviteTestId)
        axios.delete(`${process.env.baseUrl}${process.env.API.events}/${vuexContext.state.user.inviteTestId}`)
          .then(res => {
            console.log(res.data)
          })
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
        return state.templates
      },
      getGuestsInfo (state) {
        return state.user.currentEvent.guestsList
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
