var Greeter = (function () {
  'use strict';
  
  function Greeter() {}

  Greeter.prototype.hello = function (name) {
    return ['hello', name].join(' ');
  };
  
  return Greeter;
})();
