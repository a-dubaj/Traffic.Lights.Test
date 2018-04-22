let current = 'red'
let gointToGreen = true

module.exports = {
  change: () => {
    if(current === 'red') {
      current = 'yellow'
    } else if(current === 'yellow'){
      if(gointToGreen){
          current = 'green'
          gointToGreen = false
      } else {
        current = 'red'
        gointToGreen = true
      }
    } else if(current === 'green'){
      current ='yellow'
    }
  },

  getCurrent: () => {
    return current
  },
}
