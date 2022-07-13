const odd = "홀수 입니다";
const even = "짝수 입니다";

function test() {
    console.log("var1 모듈에서 제공하는 test 함수가 실행되었습니다.");
}

// 해당 var.js 모듈의 상수/함수를 외부 모듈에서 참조해 사용하려면
// 해당 변수/함수를 export를 통해 노출시켜야 사용가능하다.

module.exports = {
    odd: odd,
    even,
    test
}