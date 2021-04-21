// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

const majorityElement = function (nums) {

  if (nums.length === 0) {
    return null;
  }

  let hashCounter = {};
  let maxElement = nums[0]
  let maxCount = 1;

  for (let i = 0; i < nums.length; i++) {
    let item = nums[i]

    if (hashCounter[item] == null) {
      hashCounter[item] = 1;
    } else {
      hashCounter[item]++;
    }

    if (hashCounter[item] > maxCount) {
      maxElement = item;
      maxCount = hashCounter[item];
    }
  }

  return maxElement;
}

let nums = [2, 2, 1, 1, 1, 2, 2]

console.log(majorityElement(nums));

// const majorityElement = function(nums) {

//   let hashCounter = {};

//   for (let value in nums) {
//     if(!(value) in hashCounter) {
//       hashCounter[value] = 1;
//     } else {
//       hashCounter[value] += 1;
//     }
//   }

//   let majorityNum = 0;

//   for (let num in hashCounter) {
//     if (hashCounter[num] > majorityNum) {
//       majorityNum = hashCounter[num];
//     }
//   }

//   return majorityNum; 
// }