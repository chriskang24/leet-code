const groupAnagrams = function (strs) {

  let result = [];
  let keyStorage = {};

  for (let i = 0; i < strs.length; i++) {
    let cleanStr = strs[i].split('').sort().join('');
    if (keyStorage[cleanStr]) {
      keyStorage[cleanStr].push(strs[i]);
    } else {
      keyStorage[cleanStr] = [strs[i]];
    }
  }

  for (let value in keyStorage) {
    result.push(keyStorage[value]);
  }

  return result;
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs))

// const groupAnagrams = function (strs) {

//   let counter = 0;
//   let anagramStore = {};
//   let result = [];

//   for (let value of strs) {
//     let cleanStr = value.split('').sort().join('');
//     if (cleanStr in anagramStore) {
//       result[anagramStore[cleanStr]].push(value)
//     } else {
//       anagramStore[cleanStr] = counter;
//       result.push([value])
//       counter++
//     }
//   }

//   return result;
// };