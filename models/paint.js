const Paint = function(quantity){
  this.quantity = quantity;


};

Paint.prototype.check = function () {
  if (this.quantity === 0){
    return true
  }
};

Paint.prototype.empty = function () {
  this.quantity = 0
  return this.quantity
};




module.exports = Paint;
