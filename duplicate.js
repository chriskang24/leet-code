// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const containsDuplicate = function (nums) {

  nums.sort()
  console.log(nums)
  let newArray = [];

  for (let value of nums) {
    if (newArray.includes(value)) {
      return true;
    } else {
      newArray.push(value);
    }
  }

  return false;

};

let nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]

console.log(containsDuplicate(nums));

// const containsDuplicate = function(nums) {
    
//   let newArray = [];
  
//   for (let i = 0; i < nums.length; i++) {
      
//       if (!newArray.includes(nums[i])) {
//         newArray.push(nums[i])
//       } else {
//         return true
//       } 
//   }

//   return false
// };