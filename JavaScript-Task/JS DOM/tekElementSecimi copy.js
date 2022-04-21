// selecting elements

// *** Single Elements
// document.getElementById()

// let val;
// val = document.getElementById("header");
// val = document.getElementById("header").id;
// val = document.getElementById("header").className;

// val = document.getElementById("header");
// //val = val.id;
// //val = val.className;

// val.style.fontSize = "50px";
// val.style.background = "red";
// val.style.color = "white";

// document.getElementById("header").innerText = "salam";

// document.getElementById("header").innerHTML = "<b>salam</b>";

// console.log(val);

// document.querySelector()

console.log(document.querySelector("#header"));
console.log(document.querySelector(".card-header"));
document.querySelector("li").style.color = "red";
document.querySelector("li:last-child").style.color = "blue";
document.querySelector("li:nth-child(2)").style.color = "yellow";
document.querySelector("li:nth-child(3)").textContent = "salam baku";
document.querySelector("li").classList.add("active");
