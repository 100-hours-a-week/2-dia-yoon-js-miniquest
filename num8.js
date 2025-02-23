// 모듈 시스템 #2
import { add, subtract } from './operations.js';
import User from './userProfile.js';

// add와 subtract 함수 사용 예제
const sum = add(5, 3);
const difference = subtract(10, 4);

console.log('Sum:', sum);  // 8
console.log('Difference:', difference);  // 6

// User 클래스 사용 예제
const user = new User('John Doe', 25);
console.log(user.introduce());  // "My name is John Doe and I am 25 years old."