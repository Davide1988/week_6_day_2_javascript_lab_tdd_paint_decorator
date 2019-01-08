const assert = require('assert')
const Paint = require('../paint.js')

describe('Paint', function(){

  let paint;

  beforeEach(function(){
    paint = new Paint (20);
    paint2 = new Paint (0)

  });

  it('should have a quantity', function(){
    assert.strictEqual(paint.quantity, 20)

  });

  it('should check if empty', function(){
    assert.strictEqual(paint2.check(), true)

  });

  it('should empty the paint', function(){
    assert.strictEqual(paint.empty(), 0)

  });

});
