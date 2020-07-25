const toFizzBuzz = require('./modules/fizzbuzz');

const app = () => {
  for (let i = 1; i <= 100; i++) {
    console.log(toFizzBuzz(i));
  }
};

module.exports = app;