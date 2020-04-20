describe("Simulator for loop", function() {
  const simulateForLoop = require('../lib/simulateForLoop');
  
  beforeEach(function() {
    cb = {
      log: (value) => {
        console.log(value);
      }
    };

    spyOn(cb, 'log');
  });

  it(`
    should return 1 because init number is 1
    and test fuction is n > 0 
    and update function is n - 1 
    so callback will call 1 times`, 
    () => {
    const initNumber = 1
    const test = n => n > 0
    const update = n => n - 1
    const body = cb.log

    simulateForLoop(initNumber, test, update, body)

    expect(body).toHaveBeenCalledTimes(1)
  })

  it(`
    should return 2 because init number is 2
    and test fuction is n > 0 
    and update function is n - 1 
    so callback will call 2 times`, 
    () => {
    const initNumber = 2
    const test = n => n > 0
    const update = n => n - 1
    const body = cb.log

    simulateForLoop(initNumber, test, update, body)

    expect(body).toHaveBeenCalledTimes(2)
  })

  it(`
    should return 2 because init number is 4
    and test fuction is n % 2 === 0 
    and update function is n - 1 
    so callback will call 2 times`, 
    () => {
    const initNumber = 4
    const test = n => (n % 2 === 0) && n > 0
    const update = n => n - 1
    const body = cb.log

    simulateForLoop(initNumber, test, update, body)

    expect(body).toHaveBeenCalledTimes(2)
  })

  it(`
    should return 2 because init number is 4
    and test fuction is n % 2 === 0 
    and update function is n - 1 
    so callback will call 2 times`, 
    () => {
    const initNumber = 4
    const test = n => n % 2 === 0 && n > 0
    const update = n => n - 3
    const body = cb.log

    simulateForLoop(initNumber, test, update, body)

    expect(body).toHaveBeenCalledTimes(1)
  })
})