// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const twoSum = function (nums, target) {
  const setStorage = {};
  for (let i = 0; i < nums.length; i++) {
    if (setStorage[nums[i]] >= 0) {
      return [setStorage[nums[i]], i];
    }
    setStorage[target - nums[i]] = i;
  }
};

let nums = [22, 11, 5, 17]
let target = 39
twoSum(nums, target)

// const twoSum = function (nums, target) {

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };