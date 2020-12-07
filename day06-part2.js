let data = [
[['gwlcpbtxmiezd'], ['xwlcpbtzimgdk'], ['tbiwmpcgzdxo'], ['ygzdbpjxncfwimt']],
[['icb'], ['xqhf']],
[['mlpjsqwv'], ['dvjqsipz'], ['slqpvj']],
[['waxcqvufpkeld'], ['udkvxbjaglpq'], ['gkxfpqvudhjl'], ['uivpdozsnrqkxmtl']],
[['tzhercs'], ['cgxujw'], ['dianpfvbk']],
[['vwynik'], ['obrut'], ['gmbza'], ['atm']],
[['fvjnryuk'], ['scihpabjgdxo']],
[['kpeir'], ['rikpe'], ['rpiek']]
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

    console.log('new check');

    for(let i = 0; i < splicedLettersArray.length - 1 ; i++) {
      const filteredYes = splicedLettersArray[i].filter(value => splicedLettersArray[i+1].includes(value));
      console.log(filteredYes);
    }

  });
}

unanimousYes(data);

//const set1 = new Set([1, 2, 3, 4, 5]);
//console.log(set1.has(1)); // expected output: true
//console.log(set1.has(6));// expected output: false
