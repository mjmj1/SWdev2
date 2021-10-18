let isLeapYear1 = function(year) {
    let output;
    output = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? true : false;
    return output;
}

function isLeapYear2(year) {
    let output;
    output = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? true : false;
    return output;
}

let isLeapYear3 = (year) => {
    let output;
    output = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? true : false;
    return output;
 }

console.log(isLeapYear1(2020));
console.log(isLeapYear2(2021));
console.log(isLeapYear3(2020));


function isLeapYear4(year) {
    let output;

    if ((year % 4 === 0 && year % 100 !== 0)) {
        output = true;
    }
    else if (year % 400 === 0) {
        output = true;
    }
    else {
        output = false;
}
return output;
}

console.log(isLeapYear4(2021));
