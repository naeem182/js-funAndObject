function sumOfArray(arr) {
    let sum = 0;
    //for (let item of arr)
    for (let i = 0; i < arr.length; i++) {
        // sum +=  item;
        sum = sum + arr[i];

    }
    return sum;
}
const nums = [2, 3, 4, 5, 6]
const total = sumOfArray(nums);
console.log(total);