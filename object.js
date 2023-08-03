
const student = {
    id: 115,
    name: 'Solamin Khan',
    class: 9,
    marks: 98
}

const mobile = {
    brand: 'Samsung',
    price: 19000,
    storage: '64gb',
    camera: '7MP'
}


var myComputer = {
    brand: 'lonovo',
    price: 39000,
    color: 'silver',
    processor: 'i7'
}
// set



console.log(myComputer);
myComputer.processor = 'i30'
console.log(myComputer);

// specific property name

// // console.log(myComputer.price)//obj.property
//array
const brandn = myComputer['brand']
console.log(brandn)
 // //keys
// const keys = Object.keys(mobile);
// // console.log(keys);


// for (let i = 0; i < keys.length; i++) {
//     const key = keys[i]
//     console.log(mobile)
// }


// for (let key of keys) {
//     console.log(mobile[key])
// }
// // //values
// // const value = Object.values(mobile);

// console.log(value);

