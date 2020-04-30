describe("Find Dominent Direction", function() {
  const dominentDirection = require('../lib/dominentDirection');

  it(`should return 'ltr' becase "Hello!" read from left to right `, () => {
    const text = "Hello!"
    const result = dominentDirection(text)
    const expected = 'ltr'

    expect(result).toEqual(expected)
  })

  it(`should return 'rtl' becase "Hey, مساء الخير" is dominent by arabic it's read from right to left`, () => {
    const text = "Hey, مساء الخير"
    const result = dominentDirection(text)
    const expected = 'rtl'

    expect(result).toEqual(expected)
  })

  it(`should return 'rtl' becase "新 あたら しい 記事 きじ を 書 か こうという" is dominent by arabic it's read from right to left`, () => {
    const text = "新 あたら しい 記事 きじ を 書 か こうという"
    const result = dominentDirection(text)
    const expected = 'ltr'

    expect(result).toEqual(expected)
  })
})