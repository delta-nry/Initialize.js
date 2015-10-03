# Initialize.js
A JavaScript library for convenient object initialization

Many JavaScript programmers prefer using ```Object.create()``` over ```new``` and the constructor pattern. However, some may find the fact that the constructor pattern automatically calls a constructor function to be an advantage over ```Object.create()```. Oftentimes, users of ```Object.create()``` must remember to call an init function to put the newly created object into a valid state. Initialize.js offers another object initialization option by combining the behavior of ```Object.create()``` while automatically calling the object's ```init()``` function, if present.

Without Initialize.js, a user of ```Object.create()``` must remember to call an initialization function to set up the object:
``` JavaScript
var Foo = {
  x: 0,
  y: 0,
  init: function(args) {
    this.x = arguments[0] || 0;
    this.y = arguments[1] || 0;
    return this;  // don't forget to return this!
  }
};
var foo = Object.create(Foo).init(1, 2);
```

Object creation and initialization can be done in one statement, but the caller is forced to know if ```init()``` should be called and if so must remember to call it. Additionally, the implementer of ```Foo``` must remember to return ```this``` in the ```init()``` function for this to work. If the implementer does not return ```this``` in ```init()```, the caller needs to call ```init()``` in a separate statement:
``` JavaScript
var Foo = {
  x: 0,
  y: 0,
  init: function(args) {
    this.x = arguments[0] || 0;
    this.y = arguments[1] || 0;
    // return undefined, not `this'
  }
};
var foo = Object.create(Foo);
foo.init(1, 2);
```

With Initialize.js, objects can be created and initialized with one statement, and the caller does not have to remember to call ```init()```. Additionally, the return value of ```init()``` is ignored, so the implementer does not have to remember to return ```this```.
``` JavaScript
var Foo = {
  x: 0,
  y: 0,
  init: function(args) {
    this.x = arguments[0] || 0;
    this.y = arguments[1] || 0;
    // works with any return value
  }
};
var foo = Init.create(Foo, 1, 2);
```
