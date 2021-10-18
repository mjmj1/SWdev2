function sum(min, max) {
    let output = 1;
    for (let i= min; i <= max; i++){
        output*=i;
    }
    return output;
}

console.log(sum(1,10));