const rotate = function (nums, k) {

  if (nums.length <= 2 && k % 2 !== 0) {
    return nums.reverse();
  }

  if (nums.length <= 2 && k % 2 === 0) {
    return nums;
  }

  if (nums.length > 2) {
    if (nums.length >= k) {
      let toRotate = nums.splice(0, nums.length - k);
      toRotate.forEach(value => nums.push(value));
    } else {
      let i = 1;
      while (i <= k) {
        let value = nums.splice(nums.length - 1, 1)
        nums.unshift(value[0]);
        i++;
      }
    }
  }

  return nums;
}


nums = [1, 2, 3, 4, 5, 6], k = 7

console.log(rotate(nums, k))


// N^2 SOLUTION:
// const rotate = function (nums, k) {

//   let toRotate = nums.splice(nums.length - k, k);

//   // console.log(toRotate)

//   for (let i = toRotate.length - 1; i >= 0; i--) {
//     nums.unshift(toRotate[i])
//   }

//   return nums;
// }

