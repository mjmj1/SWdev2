let year = 2000;
let month = 2;
let days = 0;

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        days = 31;
        break;

    case 2:
        //1. 연도가 4로 나누어 떨어지면 윤년
        //2. 100으로 나누어 떨어지는 년도 제외
        //3. 400으로 나누어 떨어지는 년도는 윤년
        days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
        break;
    default:
        console.log('Invaild month');
}

console.log(days);