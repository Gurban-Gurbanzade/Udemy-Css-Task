// Arrays
let names = ['qurban', 'kenan', 'eli'];
let years = [2020, 1993, 2022, 1995];
let mix = ['qurban', 'kenan', null, undefined, ['sinema', 'kitab']];

let names1 = ['qurban', 'kenan', 'eli'];
let years1 = ['1993', '2022', '1995'];
let mix1 = ['qurban', 'kenan', null, undefined, ['sinema', 'kitab']];

//find
function over18(year) {
    let age = 2022 - year;
    return age >= 18;
}
//console.log(over18(2016));
let val1 = years.find(over18);
console.log(val1)

//filter
let val2 = years.filter(over18);
console.log(val2)


//splice
console.log(names1);
names1.splice(1, 0, 'ehmed')
console.log(names1);

//concat
let val = years.concat(names);
console.log(val);

//sort
years.sort();

//reverse
names.reverse();

//indexof
let index = names.indexOf('eli');
console.log('index ' + index)

//remove item
years.pop();
years.shift();

//add item
years.push('1996');
years.unshift('1997');

//set array item
//names[5] = 'veli';
names[names.length] = 'veli';

// get array item
console.log(names[1]);
console.log(mix[4]);

console.log(names);
console.log(names.length);
console.log(typeof names);

console.log(years);
console.log(mix);