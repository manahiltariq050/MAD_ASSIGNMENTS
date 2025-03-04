let info = "Manahil_Tariq_050";

console.log(info.charAt(0)); 
console.log(info.charCodeAt(0)); 
console.log(info.concat(" is learning JS.")); 
console.log(info.includes("Tariq")); 
console.log(info.indexOf("Tariq")); 
console.log(info.lastIndexOf("i")); 
console.log(info.match(/[A-Za-z]+/g)); 
console.log(info.repeat(2)); 
console.log(info.replace("Tariq", "Ahmed")); 
console.log(info.replaceAll("_", "-")); 
console.log(info.search("050")); 
console.log(info.slice(0, 7)); 
console.log(info.split("_")); 
console.log(info.toLowerCase()); 
console.log(info.toUpperCase()); 
console.log(info.trim()); 
console.log(info.padStart(25, "*")); 
console.log(info.padEnd(25, "*")); 
console.log(info.substring(7, 13)); 
console.log(info.toString()); 
console.log(info.valueOf()); 


//arrays methods

let arr = [1, 2, 3, 4, 5];

console.log(arr.concat([6, 7])); 
console.log(arr.copyWithin(0, 2, 4)); 
 
 
console.log(arr.fill(0)); 
console.log(arr.filter(num => num > 3)); 
console.log(arr.find(num => num > 3)); 
console.log(arr.findIndex(num => num > 3)); 
console.log(arr.flat()); 
console.log(arr.forEach(num => console.log(num))); 
console.log(arr.includes(3)); 
console.log(arr.indexOf(3)); 
console.log(arr.join('-')); 
console.log(arr.keys()); 
console.log(arr.lastIndexOf(3)); 
console.log(arr.map(num => num * 2)); 
console.log(arr.pop()); 
console.log(arr.push(6)); 
console.log(arr.reverse()); 
console.log(arr.shift()); 
console.log(arr.slice(1, 3)); 
console.log(arr.sort((a, b) => a - b)); 
console.log(arr.splice(1, 2, 8, 9)); 
console.log(arr.toString()); 
console.log(arr.unshift(0)); 
console.log(arr.values()); 
