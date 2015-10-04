// Copyright (C) 2015 Nathan Robert Yee
// The code in this file is licensed under the MIT License

var Init = (function() {
  'use strict';
  return {
    create: function(obj, args) {
      if (arguments.length > 0) {
        var newObj = Object.create(arguments[0]);
        if ('init' in newObj && typeof newObj.init === 'function') {
          var args = [];
          for (var i = 1; i < arguments.length; i++) {
            args.push(arguments[i]);
          }
          newObj.init.apply(newObj, args);
        }
        return newObj;
      }
    }
  };
})();
