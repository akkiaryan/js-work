const marvel_heros = ["thor","ironman","captain america"]

const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros)


// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// marvel_heros.concat(dc_heros);

// console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// we can use the spread operator as well for the concatination i.e. ...marvel_heros 

console.log(Array.isArray("akki"));
console.log(Array.from("akki"));
console.log(Array.from({name: "akki"})); // incase of this if no input is given then the string is given empty 
//this is asked in the interviews 


