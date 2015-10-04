// Copyright (C) 2015 Nathan Robert Yee
// The code in this file is licensed under the MIT License

QUnit.test('Init.create()', function(assert) {
  var A = {
    a: undefined,
    b: undefined,
    init: function(a, b) {
      this.a = a;
      this.b = b;
    }
  };
  var B = Object.create(A);
  B.init = function(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  };

  var a1 = Init.create(A);
  var ap1 = Object.create(A);
  ap1.init();
  
  var a2 = Init.create(A, 'a');
  var ap2 = Object.create(A);
  ap2.init('a');
 
  var a3 = Init.create(A, 'a', 'b');
  var ap3 = Object.create(A);
  ap3.init('a', 'b');
  
  var a4 = Init.create(A, 'a', 'b', 'c');
  var ap4 = Object.create(A);
  ap4.init('a', 'b', 'c');

  var b1 = Init.create(B);
  var bp1 = Object.create(B);
  bp1.init();

  var b2 = Init.create(B, 'a', 'b');
  var bp2 = Object.create(B);
  bp2.init('a', 'b');

  var b3 = Init.create(B, 'a', 'b', 'c', 'd');
  var bp3 = Object.create(B);
  bp3.init('a', 'b', 'c', 'd');

  var b4 = Init.create(B, 'a', 'b', 'c', 'd', 'e');
  var bp4 = Object.create(B);
  bp4.init('a', 'b', 'c', 'd', 'e');

  assert.deepEqual(a1, ap1,
      'Create and initialize an Object with prototype A; 0 arguments');
  assert.deepEqual(a2, ap2,
      'Create and initialize an Object with prototype A; 1 argument');
  assert.deepEqual(a3, ap3,
      'Create and initialize an Object with prototype A; 2 arguments');
  assert.deepEqual(a4, ap4,
      'Create and initialize an Object with prototype A; 3 arguments');

  assert.deepEqual(b1, bp1,
      'Create and initialize an Object with prototype B, overriding' +
      ' init() of A; 0 arguments');
  assert.deepEqual(b2, bp2,
      'Create and initialize an Object with prototype B, overriding' +
      ' init() of A; 2 arguments');
  assert.deepEqual(b3, bp3,
      'Create and initialize an Object with prototype B, overriding' +
      ' init() of A; 4 arguments');
  assert.deepEqual(b4, bp4,
      'Create and initialize an Object with prototype B, overriding' +
      ' init() of A; 5 arguments');
});
