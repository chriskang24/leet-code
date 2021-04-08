const maxArea = function (height) {

  let first = 0;
  let last = height.length - 1;
  let area = 0;

  while (first < last) {
    area = Math.max(area, Math.min(height[first], height[last]) * (last - first));

    if (height[first] < height[last]) {
      first += 1;
    } else {
      last -= 1;
    }
  }

  return area;
}

let height =  [1,8,6,2,5,4,8,3,7]

console.log(maxArea(height));

// const maxArea = function (height) {

//   let area = 0;

//   for (let i = 0; i < height.length; i++) {
//     for (let j = i + 1; j < height.length; j++) {

//      area = Math.max(area, ((j - i) * Math.min(height[i], height[j])))
//     }

//   }

//   return area;
// }
