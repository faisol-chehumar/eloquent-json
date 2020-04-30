const SCRIPTS = require('../const/scripts')

const _mappedDirection = (charCode) => {
  for(const script of SCRIPTS) {
    if(script.ranges.some(([start, end]) => 
      (start < charCode) && (end > charCode))
    ) {
      return script.direction
    }
  }
}

const dominentDirection = (text) => {
  const countGroupByDirection = [...text]
    .map((_, index) => {
      return _mappedDirection(text.codePointAt(index))
    })
    .reduce((acc, cur) => {
      return {
        ...acc,
        [cur]: ++acc[cur]
      }
    }, {
      ltr: 0,
      rtl: 0,
      ttb: 0
    })
  console.log(countGroupByDirection)

  let dominentDirection = 'ltr'
  
  Object.keys(countGroupByDirection).forEach((direction) => {
    if(countGroupByDirection[direction] > countGroupByDirection[dominentDirection]) {
      dominentDirection = direction
    }
  })

  return dominentDirection
}

module.exports = dominentDirection