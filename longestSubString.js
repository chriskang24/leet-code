var lengthOfLongestSubstring = function (s) {

  let letters = new Map()
  let maxLength = 0;
  let curLength = 0;

  for (let i = 0; i < s.length; i++) {
    if (letters.get(s[i]) !== undefined && letters.get(s[i]) >= i - curLength) {
      curLength = i - letters.get(s[i]);
    } else {
      curLength++;
    }

    letters.set(s[i], i);
    maxLength = Math.max(maxLength, curLength);
  }

  return maxLength;
}


let s = "pwwkew"

lengthOfLongestSubstring(s);

// const lengthOfLongestSubstring = function (s) {

//   if (s.length === 1) {
//     return 1;
//   }

//   let splitString = s.split('');
//   let stringStorage = [];
//   let counter = 0;
//   let maxCount = 0;

//   for (let i = 0; i < splitString.length; i++) {


//     if (!stringStorage.includes(s[i])) {
//       stringStorage.push(s[i]);
//       counter = stringStorage.length
//       counter > maxCount ? maxCount = counter : maxCount;      
//       // console.log(i, splitString.length - 1, counter,maxCount)
//     } else if (stringStorage.includes(s[i])) {
//       if (counter >= maxCount) {
//         maxCount = counter;
//         stringStorage = [];
//         stringStorage.push(s[i])
//       }
//       counter = 0;
//     }
//   }

//   return maxCount;
// }