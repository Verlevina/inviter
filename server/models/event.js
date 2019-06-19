const mongoose = require('mongoose');

const EventsSchema = mongoose.Schema({
  last_updated: Date,
  partyType: {
    type: String,
    required: true
  },
  templateId: {
    type: String,
    required: true
  },
  comments: [{ body: String, date: Date }],
  eventInfo: {
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
      email: String
    }
  ]
})

EventsSchema.pre('save', function (next) {
  this.last_updated = new Date();
});
module.exports = mongoose.model('Events', EventsSchema)