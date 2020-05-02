class Group {
  constructor(group) {
    this.group = group
  }

  static from(arr) {
    const minNumber = Math.min(...arr)
    const maxNumber = Math.max(...arr)

    const group = new Array((maxNumber - minNumber) + 1).fill('').map((_, index) => minNumber + index)

    return new Group(group)
  }

  has(number) {
    return this.group.includes(number)
  }

  add(number) {
    const newGroup = this.group.includes(number) ? this.group : [...this.group, number]
    this.group = newGroup
    return newGroup
  }

  delete(number) {
    const newGroup = this.group.filter(v => v !== number)
    this.group = newGroup
    return newGroup
  }
}

class GroupIterator {
  constructor({ group }) {
    this.index = 0
    this.group = group
  }

  next() {
    if ((this.index) < this.group.length) {
      return {value: this.group[this.index++], done: false};
    }

    
    return { done: true };
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
};

module.exports = Group