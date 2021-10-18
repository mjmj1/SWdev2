console.log("구구단.");
let sum=0;

for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        sum = i*j;
        console.log("")
        console.log(`${i} * ${j} = ${sum}`);
    }
    console.log("\n");
}