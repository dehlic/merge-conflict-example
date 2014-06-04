var Greeter = (function () {
  'use strict';
  
  function Greeter() {}

  Greeter.prototype.ciao = function (name) {
    return ['ciao', name].join(' ');
  };
  
  return Greeter;
})();
