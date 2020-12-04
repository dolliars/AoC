var passports = {
  pass1: {
    hgt:"176cm",
    iyr:2013,
    hcl:"#fffffd",
    ecl:"amb",
    byr:2000,
    eyr:2034,
    cid:89,
    pid:934693255
  },
  pass2: {
    hcl:"#b5c3db",
    ecl:"grn",
    hgt:"155cm",
    pid:"#baec97",
    iyr:2017,
    byr:1939,
    eyr:2020,
  },
  pass3: {
    pid:526669252,
    eyr:1972,
    hgt:"152cm",
    ecl:"dne",
    byr:1960,
    hcl:"z",
    iyr:2023
  },
  pass4: {
    eyr:2028,
    hcl:"#c0946f",
    hgt:"73in",
    byr:1926,
    ecl:"#473aaf",
    iyr:2016,
    pid:565318180
  }
}

function checkValid(passports){
  let required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
  let optional = ['cid'];
  let validQty = 0;

  for (const [key, value] of Object.entries(passports)) {
    var adder = 0;
    var keys = Object.keys(passports[key]);
    var sortedKeys = keys.sort();
    var sortedRequired = required.sort();

    sortedRequired.forEach((element) => {
      for (let i = 0; i < sortedKeys.length; i++) {
        //console.log('key', sortedKeys[i], 'el: ' ,element);
        if (sortedKeys[i] == element) {
          adder = adder + 1;
          //console.log('adder', adder);
        }
      }
    })

    //a dumb thing 
    if (adder == 7) {
      validQty = validQty + 1;
    }
  }
  console.log('valid: ', validQty);
}

checkValid(passports); //should yield 4 with test data

