class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  plus(vector) {
    return {x: this.x + vector.x, y: this.y + vector.y}
  }

  minus(vector) {
    return {x: this.x - vector.x, y: this.y - vector.y}
  }

  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}

module.exports = Vector