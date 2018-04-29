module.exports = () => {
  let current = 'red'
  let gointToGreen = true

    return {
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
}
