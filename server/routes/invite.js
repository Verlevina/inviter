var express = require('express');
var router = express.Router();
const Event = require('../models/event')
const randomEvent = require('../common/randomDatas/randomEventData')()
const randomGuest = require('../common/randomDatas/randomGuest')()

/* GET home page. */
router.get('/', async function (req, res, next) {
  console.log(req.query)
  let event;
  if (req.query.test) {
    event = {
      eventInfo: randomEvent.eventInfo,
      partyType: randomEvent.partyType,
      templateId: randomEvent.templateId,
      last_updated: randomEvent.last_updated,
      guest: randomGuest
    }
  } else
    if (req.query.id) {
        const eventArray = await Event.find({_id: req.query.id}, (err, dbEvent) => {
          return dbEvent;
        })
        event =  JSON.parse((JSON.stringify(eventArray[0])))
        if (req.query.guestId !== 'test') {
            console.log('hit')
            event.guestsList.forEach(guest => {
              if (guest._id == req.query.guestId) {
                event.guest = guest
              }
            })
        } else {
            console.log('guest = test')
          console.log(event)
          event.guest = randomGuest
          console.log('fron add random guest')
          console.log(event)
        }
  }
  console.log('7|||||||||||')
  console.log(event)
  console.log('||||||||||')
  res.render('invite', {...event});




});


module.exports = router;
