// 자바스크립트 객체 #2
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
 
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
 }
 
 const person1 = new Person("Jane Doe", 25);
 
 person1.greet();