const data = [['A', 'Y'], ['B', 'X'], ['C', 'Z']]

// A = X = Rock     = 1 pts
// B = Y = Paper    = 2 pts
// C = Z = Scissors = 3 pts

// Loss = 0
// Draw = 3
// Win  = 6

let yourSum = 0

const rock = 1
const paper = 2
const scissors = 3

const win = 6
const draw = 3

data.forEach(el => {
  checkWinner(el)
  if (el[1] === 'X') {
    yourSum += rock
  } else if (el[1] === 'Y') {
    yourSum += paper
  } else if (el[1] === 'Z') {
    yourSum += scissors
  }
})

function checkWinner (round) {
  // check for draw
  if ((round[0] === 'A' && round[1] === 'X') ||
       (round[0] === 'B' && round[1] === 'Y') ||
       (round[0] === 'C' && round[1] === 'Z')) {
    yourSum += draw
  } else if ((round[0] === 'A' && round[1] === 'Y') ||
             (round[0] === 'B' && round[1] === 'Z') ||
             (round[0] === 'C' && round[1] === 'X')) {
    yourSum += win
  }
}

console.log(yourSum)
