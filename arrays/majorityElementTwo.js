// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

var majorityElement = function (nums) {
  
  let occurence = nums.length / 3;
  let counts = {}

  nums.forEach(num => {
    if (counts[num]) {
      counts[num]++
    } else {
      counts[num] = 1
    }
  })

  return Object.keys(counts).map(count => {
    if (counts[count] > occurence) {
      return count
    }
  }).filter(val => val !== undefined);

};

let nums = [3, 2, 3, 4, 4, 4, 6, 1, 4]

console.log(majorityElement(nums));

// const majorityElement = function (nums) {

//   if (nums.length === 0) {
//     return null;
//   }

//   let minElementLength = nums.length / 3;
//   let hashStore = {};
//   let maxElements = [];

//   for (let i = 0; i < nums.length; i++) {
//     let item = nums[i];

//     if (hashStore[item] == null) {
//       hashStore[item] = 1;
//     } else {
//       hashStore[item]++;
//     }

//     if (hashStore[item] > minElementLength) {
//       if (!maxElements.includes(item)) {
//         maxElements.push(item)
//       }

//     }
//   }

//   return maxElements;
// };