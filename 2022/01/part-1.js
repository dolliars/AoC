const data = [[1000,2000,3000],[4000],[5000,6000],[7000,8000,9000],[10000]]

let caloriesPerElfArr = []

data.forEach(elf => {
  calsTotal = 0
  elf.forEach(snack => {
    calsTotal = calsTotal + snack
  })

  caloriesPerElfArr.push(calsTotal)
})

console.log(caloriesPerElfArr)
console.log(Math.max(...caloriesPerElfArr))
