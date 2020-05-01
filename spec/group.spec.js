const Group = require('../lib/group')

describe("Group Class", function() {
  it(`should return true because [2, 3, 4, 5] have 2`, () => {
    const group = Group.from([2, 5])
    const result = group.has(2)
    const expected = true

    expect(result).toEqual(expected)
  })

  it(`should return true because [2, 3, 4, 5] have 3`, () => {
    const group = Group.from([2, 5])
    const result = group.has(3)
    const expected = true

    expect(result).toEqual(expected)
  })

  it(`should return false because [2, 3, 4, 5] don\'t have 1`, () => {
    const group = Group.from([2, 5])
    const result = group.has(1)
    const expected = false

    expect(result).toEqual(expected)
  })

  it(`should return true because [11, 20] have 13`, () => {
    const group = Group.from([11, 20])
    const result = group.has(13)
    const expected = true

    expect(result).toEqual(expected)
  })

  it(`should return [11, 12, 13, 20] when added 20 to group([11, 13])`, () => {
    const group = Group.from([11, 13])
    const result = group.add(20)
    const expected = [11, 12, 13, 20]

    expect(result).toEqual(expected)
  })

  it(`should return [11, 12, 13] when added 13 to group([11, 13])`, () => {
    const group = Group.from([11, 13])
    const result = group.add(13)
    const expected = [11, 12, 13]

    expect(result).toEqual(expected)
  })

  it(`should return [11, 12] when delete 13 from group([11, 13])`, () => {
    const group = Group.from([11, 13])
    const result = group.delete(13)
    const expected = [11, 12]

    expect(result).toEqual(expected)
  })

  it(`should return false when add 10 and delete 10 from group([10, 20])`, () => {
    const group = Group.from([10, 20])
    group.add(10)
    group.delete(10)
    const result = group.has(10)

    const expected = false

    expect(result).toEqual(expected)
  })
})