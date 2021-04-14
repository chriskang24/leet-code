const maxProduct = function (nums) {

  let prevMax = nums[0];
  let prevMin = nums[0];
  let result = nums[0];

  if (nums.length === 0) {
    return 0;
  }

  for (let i = 1; i < nums.length; i++) {

    let curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);
    let curMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax);

    prevMax = curMax;
    prevMin = curMin;

    result = Math.max(result, curMax);
  }

  return result;
}

let nums = [2, 3, -2, 4, 2, 2];

console.log(maxProduct(nums))