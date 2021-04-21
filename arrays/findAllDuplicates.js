// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

const findDuplicates = function (nums) {

  let arrayStore = [];
  let duplicates = [];

  for (let value of nums) {
    if (!arrayStore.includes(value)) {
      arrayStore.push(value)
    } else {
      duplicates.push(value);
    }
  }

  return duplicates;
};


let nums = [4,3,2,7,8,2,3,1]

console.log(findDuplicates(nums));