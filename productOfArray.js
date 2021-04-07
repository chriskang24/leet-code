// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

const productExceptSelf = function (nums) {

  let result = new Array(nums.length);
  let before = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = before;
    before *= nums[i];
  }

  let after = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= after;
    after *= nums[i];
  }

  return result;
};

let nums = [1, 2, 3, 4]

productExceptSelf(nums);