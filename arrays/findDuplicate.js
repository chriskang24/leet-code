// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

const findDuplicate = function (nums) {

  let arrayCheck = [];

  for (let value of nums) {
    if (!arrayCheck.includes(value)) {
      arrayCheck.push(value);
    } else {
      return value;
    }
  }
};

let nums = [3, 1, 3, 4, 2]

console.log(findDuplicate(nums));