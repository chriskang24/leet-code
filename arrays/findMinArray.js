const findMin = function (nums) {

  let curMin = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < curMin) {
      curMin = nums[i];
    }
  }

  return curMin;
};

let nums = [3, 4, 5, 1, 2]

console.log(findMin(nums));