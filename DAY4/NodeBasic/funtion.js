// var.js 모듈을 function.js모듈에서 사용하기 위해 불러옴
// 다른 패키지나 라이브러리 모듈파일을 사용하기 위해서는 참조라는 과정을 거칩니다.

// 객체의 비구조화 할당기법을 이용합니다.
// 비구조화 할당이란? 객체의 속성과 함수명이 같으면 별도로 변수/함수를 선언하지 않아도
// 동일명의 변수, 함수값을 받아볼 수 있다.
const { odd, even, test } = require('./var.js');

// 홀짝수값을 받아서 전달된 값에 따라 홀짝수 메세지를 출력한다.
// checkOddOrEven함수는 반환값으로 var.js에서 제공하는 odd,even 문자열 상수값을 반환한다.
function checkOddOrEven(num) {

    // num을 2로 나눈 나머지 값
    // if(1=true 0=false)
    if (num % 2) { // 홀수
        return odd;
    }

    // 짝수
    return even;
}

// 객체형태로 모듈의 함수를 반환하지 않고
// 해당 모듈은 특정함수 하나만 바로 반환 가능
module.exports = checkOddOrEven;