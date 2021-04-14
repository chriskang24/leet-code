var trap = function (height) {

  let result = 0;

  for (let i = 1; i < height.length - 1; i++) {

    let leftMax = height[i];
    let rightMax = height[i];
    // debugger

    for (let j = 0; j < i; j++) {
      // debugger
      leftMax = Math.max(leftMax, height[j]);
      // console.log('1st', i, leftMax, height[j])
    }

    for (let k = i + 1; k < height.length; k++) {
      // debugger 
      rightMax = Math.max(rightMax, height[k]);
      // console.log('2nd', i, rightMax, height[k])
    }

    // debugger

    console.log(i, Math.min(leftMax, rightMax), height[i])
    result += Math.min(leftMax, rightMax) - height[i];
  }

  return result;
}

height = [4, 2, 0, 3, 2, 5]

console.log(trap(height));

