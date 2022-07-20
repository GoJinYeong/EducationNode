//모멘트 노드 팩키지를 참조합니다.
const moment = require('moment');

console.log("현재 날짜와 시간은????", Date.now());


var todate = moment(Date.now()).format("YYYY-MM-DD HH:mm ss");

console.log(moment(Date.now()).format("YYYY/MM/DD"));
console.log("ToDate??", todate);