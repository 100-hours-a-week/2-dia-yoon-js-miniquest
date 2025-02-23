// 블로킹, 논블로킹, 동기, 비동기 #2
console.log('Start');

setTimeout(() => {
   console.log('Async Operation Complete');
}, 1000);

console.log('End');