// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
// The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.
// completed

const merge = function (nums1, m, nums2, n) {
  let counter = 0;


  for (let i = 0; i < nums1.length; i++)
    if (nums1[i] === 0 && counter !== n) {
      nums1.splice(i, 1, nums2[counter]);
      counter++;
    }

  nums1.sort((a, b) => a - b);

  return nums1;
}

let nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0], m = 6, nums2 = [1, 2, 2], n = 3
console.log(merge(nums1, m, nums2, n));

