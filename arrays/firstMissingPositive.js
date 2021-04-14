// Given an unsorted integer array nums, find the smallest missing positive integer.

const firstMissingPositive = function(nums) {

  let counter = 1;

  while (true) {
    if (!nums.includes(counter)) {
      return counter;
    } else {
      counter++
    }
  }
};

let nums = [1,2,3,4,7,8,9,11,12]

console.log(firstMissingPositive(nums));