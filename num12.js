// 비동기 #2
// async 함수 정의
async function waitForMessage() {
    // Promise를 반환하는 새로운 Promise 생성
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, Async/Await!");
        }, 1000);
    });
 }
 
 // async 함수 사용
 async function displayMessage() {
    console.log("시작");
    const message = await waitForMessage();
    console.log(message);
    console.log("종료");
 }
 
 // 함수 실행
 displayMessage();