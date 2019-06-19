const faker = require('faker');

module.exports = function () {
  return {
    name: faker.name.firstName(),
    surname: faker.name.lastName(),
    fatherName: faker.name.lastName(),
  }
}