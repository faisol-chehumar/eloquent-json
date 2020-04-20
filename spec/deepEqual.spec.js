describe("Deep Equal", function() {
  const deepEqual = require('../lib/deepEqual');
  
  it('should return true if obj1 is {} and obj2 is {}', () => {
    const obj1 = {}
    const obj2 = {}
    const result = deepEqual(obj1, obj2)
    const expected = true

    expect(result).toEqual(expected);
  })

  it('should return false if obj1 is {} and obj2 is {a: 1}', () => {
    const obj1 = {}
    const obj2 = {a: 1}
    const result = deepEqual(obj1, obj2)
    const expected = false

    expect(result).toEqual(expected);
  })

  it('should return true if obj1 is {a: 1} and obj2 is {a: 1}', () => {
    const obj1 = {a: 1}
    const obj2 = {a: 1}
    const result = deepEqual(obj1, obj2)
    const expected = true

    expect(result).toEqual(expected);
  })

  it('should return false if obj1 is {a: 0} and obj2 is {a: 1}', () => {
    const obj1 = {a: 0}
    const obj2 = {b: 1}
    const result = deepEqual(obj1, obj2)
    const expected = false

    expect(result).toEqual(expected);
  })

  it('should return false if obj1 is {b: 0} and obj2 is {b: 0}', () => {
    const obj1 = {b: 0}
    const obj2 = {b: 0}
    const result = deepEqual(obj1, obj2)
    const expected = true

    expect(result).toEqual(expected);
  })

  it('should return true if obj1 is {b: 1} and obj2 is {b: 1}', () => {
    const obj1 = {b: 1}
    const obj2 = {b: 1}
    const result = deepEqual(obj1, obj2)
    const expected = true

    expect(result).toEqual(expected);
  })

  it('should return true if obj1 is {c: 1} and obj2 is {c: 1}', () => {
    const obj1 = {c: 1}
    const obj2 = {c: 1}
    const result = deepEqual(obj1, obj2)
    const expected = true

    expect(result).toEqual(expected);
  })

  it('should return true if obj1 is {c: 0} and obj2 is {c: 1}', () => {
    const obj1 = {c: 0}
    const obj2 = {c: 1}
    const result = deepEqual(obj1, obj2)
    const expected = false

    expect(result).toEqual(expected);
  })

  it('should return true if obj1 is {a: { b: 1 }} and obj2 is {a: 0, b: "a"}', () => {
    const obj1 = {a: 0, b: "a"}
    const obj2 = {a: 0, b: "a"}
    const result = deepEqual(obj1, obj2)
    const expected = true

    expect(result).toEqual(expected);
  })

  it('should return false if obj1 is {a: 0, b: "a"} and obj2 is {a: 0, b: "b"}', () => {
    const obj1 = {a: 0, b: "a"}
    const obj2 = {a: 0, b: "b"}
    const result = deepEqual(obj1, obj2)
    const expected = false

    expect(result).toEqual(expected);
  })

  it('should return true if obj1 is {a: { b: 1 }} and obj2 is {a: {b: 1}}', () => {
    const obj1 = {a: { b: 1 }}
    const obj2 = {a: { b: 1 }}
    const result = deepEqual(obj1, obj2)
    const expected = true

    expect(result).toEqual(expected);
  })

  it('should return false if obj1 is {a: { b: 1 }} and obj2 is {a: {b: "sdsd"}}', () => {
    const obj1 = {a: { b: 1 }}
    const obj2 = {a: { b: 'sdsd' }}
    const result = deepEqual(obj1, obj2)

    const expected = false

    expect(result).toEqual(expected);
  })

  it('should return false if obj1 is null and obj2 is {}', () => {
    const obj1 = null
    const obj2 = {}
    const result = deepEqual(obj1, obj2)

    const expected = false

    expect(result).toEqual(expected);
  })

  it('should return false if obj1 is null and obj2 is {}', () => {
    const obj1 = {here: {is: "an"}, object: 2}
    const obj2 = {here: {is: "an"}, object: 2}
    const result = deepEqual(obj1, obj2)
    const expected = true

    expect(result).toEqual(expected);
  })
})