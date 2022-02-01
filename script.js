const Calculate = {
    factorial(input) {
      if(input === 0) {
        return 1
      }
      let factor = input
      for(let i=input-1; i > 0; i--) {
        factor *= i
      }
      return factor
    }
  }
  
  module.exports = Calculate;
  
  
  