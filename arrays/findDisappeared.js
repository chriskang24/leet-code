// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

const findDisappearedNumbers = function(nums) {

  let missingNums = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      missingNums.push(i)
    }
  }

  return missingNums;
};

let nums = [4,3,2,7,8,2,3,1]

console.log(findDisappearedNumbers(nums));