// 함수형 패러다임 #2
const sumArray = (numbers) => {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
 };
 
 const numbers = [1, 2, 3, 4, 5];
 
 const total = sumArray(numbers);
 
 console.log("Numbers array:", numbers);
 console.log("Sum of all numbers:", total);