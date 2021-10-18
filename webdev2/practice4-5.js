let array = [52, 273, 32, 93, 103];

let min = Number.MAX_VALUE;
let max = Number.MIN_VALUE;

console.log(min);
console.log(max);

for(let i in array){
    if (array[i] > min) {
        min = array[i];
        break;
      }
    else if(array[i] < max) {
        max = array[i];
        break;
    }
}


console.log(`가장 큰 수: ${max}`);
console.log(`가장 작은 수: ${min}`);