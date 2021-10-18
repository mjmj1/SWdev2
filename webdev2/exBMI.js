let weight = 65;
let height = 175;
let bmi = 0;
let bmichr;

bmi = weight / ((height / 100) ** 2) ;

console.log("BMI chart");
console.log("");

if (bmi >= 30) {
    bmichr = "비만"
} else if(bmi >= 25) {
    bmichr = "과체중"
} else if(bmi >= 18.5) {
    bmichr = "정상체중"
} else {
    bmichr = "체중미달"
}

console.log("당신의 BMI 지수는 " + bmi + "입니다.[" + bmichr + "입니다.]");