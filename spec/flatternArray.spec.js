describe("Flattern Array", function() {
  const flatternArray = require('../lib/flatternArray');
  
  it('should return [] if input is []', () => {
    const array = []
    const result = flatternArray(array)
    const expected = []

    expect(result).toEqual(expected);
  })

  it('should return [1] if input is [1]', () => {
    const array = [1]
    const result = flatternArray(array)
    const expected = [1]

    expect(result).toEqual(expected);
  })

  it('should return [1, 2] if input is [1, 2]', () => {
    const array = [1, 2]
    const result = flatternArray(array)
    const expected = [1, 2]

    expect(result).toEqual(expected);
  })

  it('should return [1, [2]] if input is [1, 2]', () => {
    const array = [1, [2]]
    const result = flatternArray(array)
    const expected = [1, 2]

    expect(result).toEqual(expected);
  })

  it('should return [1, [2, [3]]] if input is [1, 2, 3]', () => {
    const array = [1, [2, [3]]]
    const result = flatternArray(array)
    const expected = [1, 2, 3]

    expect(result).toEqual(expected);
  })

  it('should return [[1, 2, 3], [4, 5], [6]] if input is [1, 2, 3, 4, 5, 6]', () => {
    const array = [[1, 2, 3], [4, 5], [6]]
    const result = flatternArray(array)
    const expected = [1, 2, 3, 4, 5, 6]

    expect(result).toEqual(expected);
  })
})