var express = require('express');
var router = express.Router();
const Event = require('../models/event');


/* GET users listing. */
router.post('/', function (req, res, next) {
  if (req.body._id) {
    // const event = new Event({
    //   ...req.body
    // })


    // Event.findOne({_id: req.body._id}, (err, event) => {
    //   if (err) {
    //     return res.status(500).send(err)
    //   }
    //   event = req.body
    //   console.log(event)
    //   event.last_updated = new Date()
    //   event.save((err, event) => {
    //     if(err) {
    //       res.status(500).json(err)
    //     } else {
    //       res.status(201).send({
    //         status: 'success',
    //         message: 'your event already updated',
    //         id: event._id,
    //       });
    //     }
    //
    //  })
    const updatedEvent = {...req.body};

    // Event.updateOne({_id: req.body._id}, {$set: updatedEvent})
    Event.findOne({_id: req.body._id}, (err, event) => {
      event.eventInfo = updatedEvent.eventInfo
      event.partyType = updatedEvent.partyType
      event.templateId = updatedEvent.templateId
      event.guestsList = updatedEvent.guestsList
      event.last_updated = new Date()

      event.save(function (err) {
        if (err) {
          res.status(500).json(err)
        } else {
          res.status(201).send({
            status: 'success',
            message: 'your event already updated',
            id: event._id,
          });
        }
      })

    })


  } else {
    const currentEvent = {
      ...req.body
    }
    currentEvent.guestsList.forEach(guest => {
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
  }

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

router.delete('/:id', function (req, res, next) {
  console.log(`delete: ${req.params.id}`)
  Event.deleteOne({_id: req.params.id}, (err, event) => {
    if (err) {
      res.status(500).json(err)
    } else {
      console.log('success')
      res.status(201).json({status: 'success', message: 'event deleted'})
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
