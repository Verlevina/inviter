var express = require('express');
var router = express.Router();
const Templates = require('../models/templates')


router.get('/:id', function (req, res, next) {
  Templates.find({eventType: req.params.id}, (err, templates) => {
    res.status(200).send(templates)
  })

});

router.post('/:id', function (req, res, next) {
  const template = new Templates({...req.body, eventType: req.params.id})
  template.save((err, template) => {
    if (err) {
      res.status(500).json(err)
    } else {
      console.log('success')
      res.status(201).send(template)
    }
  })

});

module.exports = router;
