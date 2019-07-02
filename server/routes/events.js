var express = require('express');
var router = express.Router();
const Event = require('../models/event');


/* GET users listing. */
router.post('/', function (req, res, next) {
  const currentEvent = {
    ...req.body
  }
  currentEvent.guestsList.forEach(guest=> {
    guest.answer = {
      isCome: '',
      message: ''
    }
  })
  const event = new Event({
    ...currentEvent
  })
  event.save((err, event) => {
    if (err) {
      res.status(500).json(err)
    } else {
      console.log('success')
      res.status(201).send({
        status: 'success',
        message: 'your event already added',
        id: event._id,
        guestId: event.guestsList[0]._id
      })
    }
  })
});

router.get('/', function (req, res, next) {
  Event.find({}, (err, events) => {
    if (err) {
      res.status(500).json(err)
    } else {
      console.log('success')
      res.status(201).send(events)
    }
  })
})

router.delete('/:id', function(req, res, next) {
  console.log( `delete: ${req.params.id}`)
  User.deleteOne({_id: req.params.id}, (err, event) => {
    if (err) {
      res.status(500).json(err)
    } else {
      console.log('success')
      res.status(201).json({ status: 'success', message: 'event deleted'})
    }
  })
})

router.get('/:id', function (req, res, next) {

    Event.find({_id: req.params.id}, (err, events) => {
      if (err) {
        res.status(500).json(err)
      } else {
        console.log('success')
        res.status(201).send(events)
      }
    })
})


module.exports = router;
