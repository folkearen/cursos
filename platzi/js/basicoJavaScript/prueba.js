let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
let result2 = countWhiteSpace.test(sample)

console.log(result)
console.log(result2)

