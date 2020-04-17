const deepEqual = (obj1, obj2) => {
  if(
    (obj1 === null || obj2 === null) 
    &&  (obj1 !== obj2)
  ) {
    return false
  }

  const obj1Keys = Object.keys(obj1)
  const obj2Keys = Object.keys(obj2)

  if(obj1Keys.length !== obj2Keys.length) {
    return false
  }

  for(key in obj1) {
    if(typeof obj1[key] === 'object' 
    && typeof obj2[key] === 'object') {
      return deepEqual(obj1[key], obj2[key])
    }

    if(obj1[key] !== obj2[key]) {
      return false
    }
  }

  return true
}

module.exports = deepEqual