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
function oddAdd(arr) {
    let osum = 0;
    for (let iteams of arr) {
        if (iteams % 2 == 1) {
            osum += iteams;
            console.log(iteams);
        }

    }
    return osum;

}
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12,];
let total = evenAdd(num);
let oddtotal = oddAdd(num);
console.log("only even num total", total);
console.log("only even odd total", oddtotal);
