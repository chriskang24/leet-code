// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

const removeDuplicates = function (nums) {

  nums.sort();

  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === nums[i + 1] || nums[i] === nums[i - 1]) {
      nums.splice(nums[i], 1);
    }
  }

  return nums;
}

let nums = [9, 4, 9, 8, 4, 1, 1, 2, 3, 2, 2, 3, 1, 8]
console.log(removeDuplicates(nums));

