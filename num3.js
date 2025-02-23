// 프로그래밍 패러다임 #1
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, cur) => {
   return acc + cur;
}, 0);

console.log("The sum is:", sum);