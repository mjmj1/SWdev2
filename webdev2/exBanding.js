let input_money = 5000;
let item_price = 2600;
let output_money = 0;
let coin500 = 0;
let coin100 = 0;

console.log("투입된 돈 : " + input_money + "원");
console.log("물건값 : " + item_price + "원");

output_money = input_money - item_price;
console.log("거스름돈 : " + output_money + "원");

coin500 = parseInt(output_money / 500);
coin100 = parseInt((output_money - (500 * coin500)) / 100);

console.log("500원 동전의 개수 : " + coin500 + "개");
console.log("100원 동전의 개수 : " + coin100 + "개");