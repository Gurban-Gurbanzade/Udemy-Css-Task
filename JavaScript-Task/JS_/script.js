// Deyishenler tip deyishimi
// let x = Number("5");
// let y = Number("10");

// let z = x + y;
let z;
//number to string

z = String(20);

// bool to string

z = String(true);

// date to string
z = String(new Date().getFullYear());

//array to string

z = String([1, 2, 3]);

//toString
z = (10).toString();
z = true.toString();

//string to number

z = Number("10");
z = Number(true);
z = Number(false);
z = Number(null);
z = Number("a");
z = Number([1, 2, 3]);

//parsInt parsFloat
z = parseInt("10");
z = parseInt("10.5");
z = parseFloat("10.5");

console.log(z);
console.log(typeof z);
//console.log(z.length);
