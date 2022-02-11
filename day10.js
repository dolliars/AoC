const sampleData = [16, 10, 15, 5, 1, 11, 7, 19, 6, 12, 4];
const sampleData2 = [28, 33, 18, 42, 31, 14, 46, 20, 48, 47, 24, 23, 49, 45, 19, 38, 39, 11, 1, 32, 25, 35, 8, 17, 7, 9, 4, 2, 34, 10, 3]
const data = [ 133, 157, 39, 74, 108, 136, 92, 55, 86, 46, 111, 58, 80, 115, 84, 67, 98, 30, 40, 61, 71, 114, 17, 9, 123, 142, 49, 158, 107, 139, 104, 132, 155, 96, 91, 15, 11, 23, 54, 6, 63, 126, 3, 10, 116, 87, 68, 72, 109, 62, 134, 103, 1, 16, 101, 117, 35, 120, 151, 102, 85, 145, 135, 79, 2, 147, 33, 41, 93, 52, 48, 64, 81, 29, 20, 110, 129, 43, 148, 36, 53, 26, 42, 156, 154, 77, 88, 73, 27, 34, 12, 146, 78, 47, 28, 97 ]

function sort(data) {
  return data.sort((a,b) => a - b);
}

function addDeviceJolt(sortedData) {
  let extraJolt = sortedData[sortedData.length - 1] + 3;
  sortedData.push(extraJolt);
  return sortedData;
}

function differences(sortedData) {
  let diffArray = [];
  for(let i = 0; i < sortedData.length - 1; i++) {
    let a = sortedData[i];
    let b = sortedData[i+1];
    let diff = b - a;
    diffArray.push(diff);
  }
  return diffArray;
}

function count(diffArray) {
  let oneCounter = 0;
  let threeCounter = 0;
  for (let i = 0; i < diffArray.length; i++) {
    if( diffArray[i] === 1) {
      oneCounter++;
    }
    if( diffArray[i] === 3) {
      threeCounter++;
    }
  }
  return [ oneCounter, threeCounter ];
}

 function multiply(diffArray) {
   return diffArray[0] * diffArray[1];
 }

data.push(0); // add 0 from charging outlet to data

let sortedData = sort(data);
let arrayPlusDevice = addDeviceJolt(sortedData);
let diffArray = differences(arrayPlusDevice);
let diffPair = count(diffArray);

console.log(multiply(diffPair));
