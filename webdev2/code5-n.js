let man1 = function () {
    console.log("함수의 첫 번째 줄");
    console.log("함수의 두 번째 줄");
};

man1();
console.log(man1);
console.log(man1());

function man2() {
    console.log("함수의 첫 번째 줄");
    console.log("함수의 두 번째 줄");
}

man2();
console.log(man2);

let man3 = () => {
    console.log("함수의 첫 번째 줄");
    console.log("함수의 두 번째 줄");
};

man3();
console.log(man3);