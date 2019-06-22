const faker = require('faker');
const randomMan = require('./randomMan')

module.exports = function () {
  return {
    ...randomMan(),
    email: faker.internet.email(),
    inviteUrl: faker.internet.url()
  }
}