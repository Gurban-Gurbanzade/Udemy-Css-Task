let names = ["qurban", "kenan", "unal", "turan"];
let years = [1993, 1995, 2002, 2005];

// get array
console.log(names[2]);
console.log(years[2]);

// set array
//names[0] = "eli";
//names[6] = "veli";
names[names.length] = "asim";

// add item
years.push(2022);
years.unshift(1985);

// remove item
years.pop();
years.shift();

console.log(years);
console.log(names.length);
console.log(typeof names);
