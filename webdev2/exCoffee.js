//메뉴
const americano = 2000;
const cappuccino = 3000;
const caferatte = 3500;

//판매량
let sell_ame = 20;
let sell_cap = 10;
let sell_cafe = 5;

//총판매량
let total = 0;
total = americano * sell_ame + cappuccino * sell_cap + caferatte * sell_cafe

console.log("총 매출은 " + total + "원 입니다." );