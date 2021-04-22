//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(input) {

  let storage = new Map();

  for (let value of input) {
    if (storage.has(value)) {
      return value;
    } else {
      storage.set(value, 1);
    }
  }

  return undefined;
}

let input = [2, 5, 5, 2, 3, 5, 1, 2, 4]
console.log(firstRecurringCharacter(input))

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2