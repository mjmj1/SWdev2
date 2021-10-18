let output = "";

for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        output += `${i}*${j}=${i*j}\t`;
    }
    output += '\n';
}
console.log(output);