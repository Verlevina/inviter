var express = require('express');
var router = express.Router();
const Event = require('../models/event');

/* GET users listing. */
router.post('/', function (req, res, next) {
  const event = new Event(req.body)
  event.save((err, event) => {
    if (err) {
      res.status(500).json(err)
    } else {
      console.log('success')
      res.status(201).send({
        status: 'success',
        message: 'your event already added'
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



module.exports = router;
  // [
  //   {
  //     partyType: 'wedding',
  //     templateId: 'LoveIs',
  //     eventInfo:
  //       {
  //         bride:
  //           {
  //             name: 'Вероника Александровна Левитина',
  //             surname: 'Вероника Александровна Левитина',
  //             fathername: 'Вероника Александровна Левитина'
  //           },
  //         groom:
  //           {
  //             name: 'Вероника Александровна Левитина',
  //             surname: 'Вероника Александровна Левитина',
  //             fathername: 'Вероника Александровна Левитина'
  //           },
  //         date: '2019-03-19',
  //         time: '04:22',
  //         message: '',
  //         address: 'Мкр. Юбилейный, ул. Пионерская, д. 10, кв. 30'
  //       },
  //     guestsList:
  //       [{
  //         id: 1,
  //         name: 'Вероника Александровна Левитина',
  //         surname: '',
  //         fathername: '',
  //         email: 'Levitihnava@gmail.com'
  //       },
  //         {
  //           id: 2,
  //           name: ' Левитина',
  //           surname: '',
  //           fathername: '',
  //           email: 'Levitinava@gmail.com'
  //         }
  //       ]
  //   },
  //   {
  //     partyType: 'wedding',
  //     templateId: 'LoveIs',
  //     eventInfo:
  //       {
  //         bride:
  //           {
  //             name: 'Вероника ',
  //             surname: 'Вероника ',
  //             fathername: 'Левитина'
  //           },
  //         groom:
  //           {
  //             name: 'Вероника Александровна Левитина',
  //             surname: 'Вероника Александровна Левитина',
  //             fathername: 'Вероника Александровна Левитина'
  //           },
  //         date: '2019-02-19',
  //         time: '04:22',
  //         message: '',
  //         address: 'Мкр. Юбилейный, ул. Пионерская, д. 10, кв. 30'
  //       },
  //     guestsList:
  //       [
  //         {
  //           id: 1,
  //           name: 'Вероника Александровна Левитина',
  //           surname: '',
  //           fathername: '',
  //           email: 'Levitinava@gmail.com'
  //         },
  //         {
  //           id: 2,
  //           name: 'Вероника Александровна Левитина',
  //           surname: '',
  //           fathername: '',
  //           email: 'Levitinava@gmail.com'
  //         }
  //       ]
  //   }
  // ]