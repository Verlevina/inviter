var express = require('express');
var router = express.Router();
const Event = require('../models/event')
const randomEvent = require('../common/randomDatas/randomEventData')()
const randomGuest = require('../common/randomDatas/randomGuest')()
const MarkupTemplatesSchema = require('../models/markupTemplates');

/* GET home page. */
router.get('/', async function (req, res, next) {
  console.log(req.query)
  let event;
  let markup;
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
          if (err) {
            res.render('error',{message: 'not found', error: {status: 404, stack: 'we have no sutch event or guest'}});

          }
          return dbEvent;
        })
        event =  JSON.parse((JSON.stringify(eventArray[0])))
        if (req.query.guestId !== 'test') {
            console.log('hit')
          let isGuest = true
            event.guestsList.forEach(guest => {
              if (guest._id == req.query.guestId) {
                event.guest = guest
                isGuest = !isGuest
              }
            })
          if (isGuest) {
            res.render('error',{message: 'not found', error: {status: 404, stack: 'we have no sutch event or guest'}});
          }
        } else {
          event.guest = randomGuest
        }

  }

  //get markup:
  MarkupTemplatesSchema.findOne({name: event.templateId}, (err, bdmarkup) => {
    if (err) {
      res.render('error',{message: 'not found', error: {status: 404, stack: 'we have no template'}});
    }
    markup = bdmarkup
    console.log(markup)
  })

  res.render('invite', {...event, ...markup});




});


module.exports = router;
