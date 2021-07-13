let peselArray = [9, 8, 1, 1, 1, 4, 0, 7, 3, 6],
  numbers = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];

const produceAndAdd = (peselArray = [], numbers = []) => {
  let sum = 0;
  for (let i = 0; i < peselArray.length; i++) {
    const product = peselArray[i] * numbers[i];
    sum += product;
    sum = sum % 10;
  }
  return sum;
};

var array1 = [1, 2, 3, 4];
var array2 = [5, 6, 7, 8];

var sum = array1.map(function (num, idx) {
  let sum3 = 0;
  let sum2 = num * array2[idx];
  sum3 += sum2;
  return sum3;
});
console.log(sum);
console.log(produceAndAdd(peselArray, numbers));
