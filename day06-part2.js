let data = [
  [['abc']],
  [['a'],['b'],['c']],
  [['ab'],['ac']],
  [['a'],['a'], ['a'], ['a']], 
  [['b']]
];

function unanimousYes(data) {
  let yes = 0;

  data.forEach(function (element) {
    let splicedLettersArray = [];
    for(let i = 0; i < element.length; i++) {
      let stringObj = element[i];
      let string = stringObj[0];
      string = string.split("");
      splicedLettersArray.push(string)
    }
    
    let filtered = splicedLettersArray.reduce((a,c) => a.filter(i => c.includes(i)));
    yes = yes + filtered.length;
  });
  return yes;
}

console.log(unanimousYes(data));

