#!/usr/bin/node

module.exports = {
  /*
Invokes a function after incrementing its argument by 1.
  */

  addMeMaybe: function (number, theFunction) {
    number++;
    theFunction(number);
  }
};
