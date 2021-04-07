// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

const maxSubArray = function (nums) {

  let currentSum = 0;
  let maxSum = nums[0];

  nums.forEach(value => {
    currentSum = Math.max(value, currentSum + value);
    maxSum = Math.max(maxSum, currentSum);
  })

  return maxSum;
};


let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

maxSubArray(nums)