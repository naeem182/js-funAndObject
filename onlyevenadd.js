function evenAdd(arr) {
    let sum = 0;
    for (let iteams of arr) {
        if (iteams % 2 == 0) {
            sum += iteams;
            console.log(iteams);
        }

    }
    return sum;

}
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,];
let total = evenAdd(num);
console.log("only even num total", total);
