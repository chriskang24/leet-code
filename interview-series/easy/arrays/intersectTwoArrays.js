// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

const intersect = function (nums1, nums2) {

  const hashMap = new Map();
  const result = [];

  //note: .set(key, value)
  for (let value of nums1) {
    if (hashMap.has(value)) {
      hashMap.set(value, hashMap.get(value) + 1);
    } else {
      hashMap.set(value, 1)
    }
  }

  for (let value of nums2) {
    if (hashMap.has(value) && hashMap.get(value) > 0) {
      if (!result.includes(value)) {
        result.push(value);
      }
      hashMap.set(value, hashMap.get(value) - 1);
    }
  }

  return result;

}

let nums1 = [1, 2, 2, 1], nums2 = [2, 2, 1, 3]

console.log(intersect(nums1, nums2));

// To Eliminate duplicates:
// let uniqueResults = new Set();
// let finalResult = [];

// for (let value of result ) {
//   uniqueResults.add(value);
// }

// uniqueResults.forEach(value => finalResult.push(value));

// return finalResult;

