#!/usr/bin/node

module.exports = {
  /*
 callMeMoby - Invokes a function x times.
  */

  callMeMoby: function (x, theFunction) {
    for (let i = 0; i < x; i++) {
      theFunction();
    }
  }
};
