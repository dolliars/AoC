const data = [[1000,2000,3000],[4000],[5000,6000],[7000,8000,9000],[10000]]

let caloriesPerElfArr = []

data.forEach(elf => {
  calsTotal = 0
  elf.forEach(snack => {
    calsTotal = calsTotal + snack
  })

  caloriesPerElfArr.push(calsTotal)
})

let top3Arr = caloriesPerElfArr.sort(function(a, b){return b - a}).slice(0, 3)
let sumTop3 = top3Arr.reduce((pv, cv) => pv + cv, 0);

console.log(sumTop3);
