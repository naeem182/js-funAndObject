const naeem = {
    name: "naeem",
    age: 1920,
    edu: "bubt",
    intake: 44,
    id: 182,
    dep: " cse",
}
//set value
naeem.name = 'naeem islam';
console.log(naeem)
// find
console.log(naeem.name)
//find with array
let n = naeem['id'];
console.log(n)
//keys
const key = Object.keys(naeem);
console.log(key);
//values
const value = Object.values(naeem);
console.log(value)

// forloop
for (let i = 0; i < key.length; i++) {
    const propertyName = key[i];
    const propertyValue = naeem[propertyName]
    console.log(propertyName, propertyValue)

}
//for in
for (let iteams in naeem) {
    console.log(iteams, naeem[iteams])
}