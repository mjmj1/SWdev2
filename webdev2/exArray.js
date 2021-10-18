function min(array) {
    let output = array[0];

    for(const item of array){
        if (output > item) {
            output = item;
            
            return output;
        }
    }
}


const testArray = [22, 2, 24, 24, 57, 100, 299];

min(testArray);
console.log(`${testArray}중에서 `);
console.log(`최소값 = ${min(testArray)}`);


