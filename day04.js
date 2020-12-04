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
  required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
  optional = ['cid'];

  for (const [key, value] of Object.entries(passports)) {
    console.log(passports)
  }
}

checkValid(passports); //should yield 4 with test data

//  for (const property in passports) {
//    console.log(`${property}: ${passports[property]}`);
//  }
