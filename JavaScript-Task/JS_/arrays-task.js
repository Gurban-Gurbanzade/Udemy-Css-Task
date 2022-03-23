let arr = ["bmw", "mercedes", "opel", "mazda"];

console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[arr.length - 1]);

arr.push("renault"); // axira elave edir
console.log(arr);

arr.unshift("toyota"); //evvele elave edir
console.log(arr);

let a = arr.indexOf("renault");
arr.splice(a, 1); //elementi silir

arr.reverse(); // tersine cevirir
arr.sort(); // herf sirasi

console.log(arr);

let numbers = [1, 2, 5, 80, 15];
console.log(numbers.sort());

console.log(arr.includes("opel")); //elmentin orada olub-olmadigini yoxlayir

let str = "chevrolet,dacia";
let arr2 = str.split(",");
console.log(arr2);
arr = arr.concat(arr2);
console.log(arr);

arr.splice(arr.length - 2, 2);
console.log(arr);
