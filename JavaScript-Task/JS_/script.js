const name = 'kenan';
const surname = 'qurbanzade';
const age = 35;
let hobby = 'kino, kitab, idman, yazi'
let val;

val = name + " " + surname;
val = name;
val += surname;
val = 'menim adim ' + name + ' soyadim ' + surname + ' ve yasim ' + age;

val = name.concat(' ', surname);

//val = val.length;

val = val.toUpperCase();
val = val.toLowerCase();

//val = val[2];

//val = val.indexOf('e');

//val = val.substring(0, 5);

//val = val.slice(6);

val = hobby.split(',');









console.log(val);
console.log(typeof val);