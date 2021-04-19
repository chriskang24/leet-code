const mergeSortedArrays = function (a, b) {

  let array1 = a[0]
  let array2 = b[0]
  let i = 1
  let j = 1
  let sortedArray = [];

  while (array1 || array2) {
    if (array2 === undefined || array1 < array2) {
      sortedArray.push(array1)
      array1 = a[i]
      i++
    } else {
      sortedArray.push(array2)
      array2 = b[j]
      j++
    }
  }

  return sortedArray;
}

let a = [0, 3, 4, 31]
let b = [4, 6, 30]

console.log(mergeSortedArrays(a, b))