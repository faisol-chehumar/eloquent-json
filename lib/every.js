const everyLoop = (array, test) => {
  for(const i of array) {
    if(!test(i)) {
      return false
    }
  }
  return true
}

const everySome = (array, test) => {
  if(array.some(elm => !test(elm))) {
    return false
  }

  return true
}

module.exports = {
  everyLoop,
  everySome
}