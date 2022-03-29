let cars = ["BMW", "Mercedes", "Toyota"];
let people = [
  { firstname: "qurban", lastname: "qurbanzade" },
  { firstname: "kenan", lastname: "qurbanzade" },
  { firstname: "eli", lastname: "elizade" },
];
let i;
//              for

//          array
// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }
//          object
// for (i = 0; i < people.length; i++) {
//   console.log(people[i].firstname);
// }

//              for -in
//          array
// for (let i in cars) {
//   console.log(cars[i]);
// }
//          object
// for (i in people) {
//   console.log(people[i].lastname);
// }

//              foreach
//          array
// cars.forEach(function (item) {
//   console.log(item);
// });
//          object
// people.forEach(function (item) {
//   console.log(item.firstname);
// });

let number = [1, 2, 3, 4, 5];
let num = number.map(function (n) {
  return n * n;
});
console.log(num);
