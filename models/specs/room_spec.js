const assert = require('assert')
const Room = require('../room.js')

describe('Room', function(){

  let room;

  beforeEach(function(){
    room = new Room (20);


  });


  it('should have an area', function(){
    assert.strictEqual(room.area, 20)
  });

  it('should have an status', function(){
    assert.strictEqual(room.painted, false)
  });

});
