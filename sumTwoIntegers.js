// Given two integers a and b, return the sum of the two integers without using the operators + and -.

const getSum = function(a, b) {

  while (b !== 0) {
    let carry = a & b;

    a = a ^ b;
    b = carry << 1;
  }

  return a;
}


getSum(2,3)