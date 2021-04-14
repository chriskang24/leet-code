const threeSum = function (nums) {

  nums.sort();
  let result = [];

  for (let i = 0; i < nums.length - 3; i++) {

    // if index > 0 and current number equals previous number
    // We do not want duplicates, and already taken the previous answer
    // Skip this iteration with `continue`
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum < 0) {
        left += 1;
      } else if (sum > 0) {
        right -= 1;
      } else {
        result.push([nums[i], nums[left], nums[right]]);
        // remove duplicates 
        while (left < right && nums[left] === nums[left + 1]) {
          left += 1
        }
        // remove duplicates 
        while (left < right && nums[right] === nums[right - 1]) {
          right -= 1;
        }
        // Our left and right pointers are still on a duplicate , so move one more time
        left += 1;
        right -= 1;
      }
    }
  }

  return result;
};

let nums = [-1, 0, 1, 2, -1, -4]

console.log(threeSum(nums));