const assert = require('assert')
const Room = require('../room.js')

describe('Room', function(){
  room = new Room (20);
  it('should have an area', function(){
    assert.strictEqual(room.area, 20)
  });
});
