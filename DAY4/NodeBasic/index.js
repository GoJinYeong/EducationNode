// var.js 모듈에서 제공해주는 odd, even 상수변수를 받아오고 상수를 정의한다.
const { odd, even, test } = require('./var.js');

// function.js 모듈에서 반환해주는 checkOddOrEven 함수를 checkNumber라는 상수로 저장한다.
const checkNumber = require('./funtion.js');

const result = checkNumber(9);

// 문자열 길이에 따라 홀짝수 메세지를 출력하는 함수
function checkStringOddOrEven(str) {
    if (str.length % 2) {
        return odd;
    }

    return even;
}



console.log("최종 실행 결과 메세지는", result);
// 문자열 길이를 체크해줄 홀짝수 출력
console.log(checkStringOddOrEven('Hello'));

// 실행된 로그 메세지를 터미널에서 확인합니다
test();