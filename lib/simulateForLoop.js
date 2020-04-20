const simulateForLoop = (initNumber, test, update, cb) => {
  if(test(initNumber)) {
    cb()
    return simulateForLoop(update(initNumber), test, update, cb)
  }
  
  if(initNumber > 0) {
    return simulateForLoop(update(initNumber), test, update, cb)
  }
}

module.exports = simulateForLoop