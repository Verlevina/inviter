const mongoose = require('mongoose');

const TemplatesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  src: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  eventType: {
    type: String,
    required: true
  }
})
module.exports = mongoose.model('Templates', TemplatesSchema)