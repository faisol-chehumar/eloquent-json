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

module.exports = Group