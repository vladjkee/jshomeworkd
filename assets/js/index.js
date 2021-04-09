class RangeValidator {
  constructor(from, to){
    this.from = from;
    this.to = to;
  }
  set from(value){
    if(typeof value !== 'number') throw new TypeError ('wrong type, need a number');
    this._from = newFrom;
  }
  set to(newTo){
    if(typeof value !== 'number') throw new TypeError ('wrong type, need a number');
    this._to = newTo;
  }
  get from(value){
    return this._from;
  }
  get to(){
    return this._to;
  }
  get range(){
    return [this._from, this._to];
  }
  validator(num){
    if(num < this.from || num > this.to){
      throw new RangeError("Number if out of range")
    }
    return num;
  }
  }
  const validator = new RangeValidator(5,10);