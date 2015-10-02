var i = (function() {
  'use strict';
  return {
    c: function(obj, args) {
      if (arguments.length > 0) {
        var newObj = Object.create(arguments[0]);
        if ('init' in newObj) {
          if (arguments.length > 1) {
            var args = [];
            for (var i = 1; i < arguments.length; i++) {
              args.push(arguments[i]);
            }
            newObj.init.apply(newObj, args);
          }
        }
        return newObj;
      }
    }
  };
})();
