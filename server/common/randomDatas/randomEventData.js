const faker = require('faker');
const guest = require('./randomGuest')
const eventInfo = require('./randomEventInfo')

module.exports = function () {
  const guestsList = [];
  for (let i = 0; i <= Math.floor((Math.random() * (100 - 10) + 10)); i++) {
    guestsList.push(guest());
  }
console.log('hello from data')
  return {
    guestsList,
    eventInfo: eventInfo(),
    partyType: 'wedding',
    templateId: 'LoveIS',
    last_updated: faker.date.past()
  }
}