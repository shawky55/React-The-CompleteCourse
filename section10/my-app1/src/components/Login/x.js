//
let s = '12:05:45AM';
let numbers = s.split(':');
numbers = numbers.map((num) => {
  return parseInt(num);
});

if (s.includes('PM')) {
  numbers[0] !== 12 ? (numbers[0] += 12) : null;
}

if (s.includes('AM') && numbers[0] == 12) {
  numbers[0] = '00';
}
// if (s.includes('PM') && numbers[0] == 12) {
//   numbers[0] = '00';
// }
// if (s.includes('PM') && numbers[0] == 12) {
//   console.log(numbers[0]);
//   numbers[0] = '00';
// }
numbers.forEach((ele, indx, arr) => {
  arr[indx] = String(ele).padStart(2, '0');
});
console.log(`${numbers[0]}:${numbers[1]}:${numbers[2]}`);
