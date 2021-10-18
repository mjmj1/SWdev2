let date = 96;
let webdev = 76;
let swdev = 88;
let db = 51;
let eng = 67;
let avg, total, score;

total = date + webdev + swdev + db + eng;
avg = total / 5

if (avg >= 90) score = "A";
else if (avg < 90 && avg >=80) score ="B";
else if (avg < 80 && avg >=70) score ="C";
else if (avg < 70 && avg >=60) score ="D";
else score ="F";

console.log(`당신의 학점은 총점 : ${total} 평균 : ${avg} 등급 : ${score} 입니다.`);