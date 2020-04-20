const flatternArray = (arr, defaulArray = []) => {
  return arr.reduce((acc, cur) => {
    return Array.isArray(cur) 
      ? flatternArray(cur, acc) 
      : acc.concat(cur)
  }, defaulArray)
}

module.exports = flatternArray