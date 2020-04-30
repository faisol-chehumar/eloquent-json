describe("Vector", function() {
  const Vector = require('../lib/vector')

  it(`should return {x: 3, y: 5} because vector is {1, 2} + {2, 3}`, () => {
    const result = new Vector(1, 2).plus(new Vector(2, 3))
    const expected = {x: 3, y: 5}

    expect(result).toEqual(expected)
  })

  it(`should return {x: -1, y: -1} because vector is {1, 2} - {2, 3}`, () => {
    const result = new Vector(1, 2).minus(new Vector(2, 3))
    const expected = {x: -1, y: -1}

    expect(result).toEqual(expected)
  })

  it(`should return 5 because vector is {3, 4}`, () => {
    const result = new Vector(3, 4).length
    const expected = 5

    expect(result).toEqual(expected)
  })
})