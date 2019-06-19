const faker = require('faker');
const bride = require('./randomMan')
const groom = require('./randomMan')

module.exports = function () {
  return {
    bride: bride(),
    groom: groom(),
    date: faker.date.future(),
    time: '10-00',
    message: faker.lorem.words(),
    address:`${faker.address.streetAddress()}, ${faker.address.secondaryAddress()}, ${faker.address.city()}, ${faker.address.country()}`,
  }
}