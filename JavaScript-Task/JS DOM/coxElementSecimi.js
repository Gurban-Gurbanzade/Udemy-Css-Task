// selecting elements

// *** Single Elements

// document.getElementById()
// document.querySelector()

// *** Multiple Elements

//class name
let val;
// val = document.getElementsByClassName("list-group-item");
// // val = document.getElementsByClassName("list-group-item")[0].style.color = "red";

// //val = val[2];
// val[1].style.color = "blue";
// val[1].style.fontSize = "40px";
// val[2].textContent = "salam baku";
// console.log(val);

// for (let i = 0; i < val.length; i++) {
//   val[i].style.color = "green";
// }

// document.getElementsByTagName()

// val = document.getElementsByTagName("li");
// val = document.getElementById("task-list");
// val = val.getElementsByTagName("a");

// document.querySelectorAll()

val = document.querySelectorAll("li");

// val.forEach(function (item) {
//   console.log(item);
// });

// val.forEach(function (item, index) {
//   item.textContent = `${index} salam`;
// });

console.log(val);
