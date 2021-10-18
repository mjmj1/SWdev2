let date = new Date();

let yyyy = date.getFullYear();
let mm = date.getMonth();
let dd = date.getDate();
let hh = date.getHours();
let mi = date.getMinutes();
let ss = date.getSeconds();

console.log(`오늘 날짜는 ${yyyy}년 ${mm + 1}월 ${dd}일 ${hh}시 ${mi}분 ${ss}초 입니다.`);