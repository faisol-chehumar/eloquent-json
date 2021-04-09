const buildGraph = require('../lib/robot')

const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

describe("Road", function() {
  it(`should return road nodes`, () => {
    const result = buildGraph(roads);
    console.log('result', result)
    const expected = {}
    // Object.call(this, {one: true, two: true, hasOwnProperty: true})
    
    // console.log(Object.call(map.hasOwnProperty("one"),  {one: true, two: true, hasOwnProperty: true}))
    expect(result).toEqual(expected)
  })
})