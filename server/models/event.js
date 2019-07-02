const mongoose = require('mongoose');

const EventsSchema = mongoose.Schema({
  last_updated: Date,
  partyType: {
    type: String,
    required: true
  },
  complete: Boolean,
  templateId: {
    type: String,
    required: true
  },
  eventInfo: {
    address: {
      type: String,
      required: true
    },
    date: Date,
    message: String,
    time: String,
    bride: {
      name: {
        type: String,
        required: true
      },
      surname: String,
      fathername: String
    },
    groom: {
      name: {
        type: String,
        required: true
      },
      surname: String,
      fathername: String
    }
  },
  guestsList: [
    {
      id: String,
      name: {
        type: String,
        required: true
      },
      surname: String,
      fathername: String,
      email: String,
      inviteUrl: String,
      answer: {
        isCome: String,
        message: String
      }
    }
  ]
})

EventsSchema.pre('save', function (next) {
  this.last_updated = new Date();
  this.guestsList.forEach(guest => {
    guest.inviteUrl +=  '/invite' + `?id=${this._id}&guestId=${guest._id}`
  })
  next();
});
module.exports = mongoose.model('Events', EventsSchema)