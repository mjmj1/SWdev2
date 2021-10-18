let test;
console.log(Boolean(test));
test = test ? test : "초기화 합니다_1";
console.log(test);

test = test ? test : "초기화 합니다_2";
console.log(test);