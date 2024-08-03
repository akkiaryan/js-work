const myArray = [0,1,2,3,4,5]

// myArray.push(6)
// myArray.push(7)
// myArray.pop()

// console.log(myArray.includes(9));
// slice and splice 
// in slice the range is taken i.e 1,3 so it will consider the index of 1 and 3 in that case it is 1,2
// where as in the splice it cut the portion of index that is requried apart of the range 

console.log(" A ",myArray);

const myn1 = myArray.slice(1,3)

console.log(myn1);

const myn2 = myArray.splice(1,3)
console.log(" B ",myArray);
console.log(myn2);









