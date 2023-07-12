let a = ["a","b","c"];
let b = [1,2,3];
let obj = {}

for(let i = 0; i< a.length; i++) {
    obj[a[i]] = b[i];
}

console.log(obj)