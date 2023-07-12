const letters = ['a', 'b', 'c']
// const plusLetters = []
// for(let i= 0; i< letters.length; i++) {
//     plusLetters.push(letters[i] + '++')
// }
// =
const plusLetters = letters.map(item => item + '++')

console.log(letters)
console.log(plusLetters)
