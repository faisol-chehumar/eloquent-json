describe("Every method", function() {
  const { everyLoop, everySome } = require('../lib/every');

  it(`should return true becase [] is equal to [] `, () => {
    const arr = []
    const test = n => n === null

    const result = everyLoop(arr, test)
    const expected = true

    expect(result).toEqual(expected)
  })

  it(`should return true becase [1] is equal to n => n === 1 `, () => {
    const arr = [1]
    const test = n => n === 1

    const result = everyLoop(arr, test)
    const expected = true

    expect(result).toEqual(expected)
  })

  it(`should return false becase [2] is equal to n => n === 1 `, () => {
    const arr = [2]
    const test = n => n === 1

    const result = everyLoop(arr, test)
    const expected = false

    expect(result).toEqual(expected)
  })

  it(`should return true becase [1, 1, 1, 1] is equal to n => n === 1 `, () => {
    const arr = [1, 1, 1, 1]
    const test = n => n === 1

    const result = everyLoop(arr, test)
    const expected = true

    expect(result).toEqual(expected)
  })

  it(`should return true becase [1, 1, 1, 1] is equal to n => n === 1 `, () => {
    const arr = [1, 1, 1, 1]
    const test = n => n === 1

    const result = everyLoop(arr, test)
    const expected = true

    expect(result).toEqual(expected)
  })

  it(`should return false becase [1, 2, 3, 4] is equal to n => n % 2 === 0 `, () => {
    const arr = [1, 2, 3, 4]
    const test = n => n % 2 === 0

    const result = everyLoop(arr, test)
    const expected = false

    expect(result).toEqual(expected)
  })

  it(`should return false becase [2, 4, 6, 8] is equal to n => n % 2 === 0 `, () => {
    const arr = [2, 4, 6, 8]
    const test = n => n % 2 === 0

    const result = everyLoop(arr, test)
    const expected = true

    expect(result).toEqual(expected)
  })

  it(`should return false becase [2, 4, 6, 8] is equal to n => n % 2 === 0 `, () => {
    const arr = [2, 4, 6, 8]
    const test = n => n % 2 === 0

    const result = everySome(arr, test)
    const expected = true

    expect(result).toEqual(expected)
  })
})