"use strict";
const tasklist = document.querySelector("#task-list");

//***removing element
//tasklist.remove();
//tasklist.childNodes[7].remove();
//tasklist.children[3].remove();
//tasklist.removeChild(tasklist.children[3]);

//*** removing attribute
//tasklist.children[0].removeAttribute("class");

// for (let i = 0; i < tasklist.children.length; i++) {
//   tasklist.children[i].removeAttribute("class");
// }

//*** Replacing Elements

// const cardHeader = document.querySelector(".card-header");

// // create element

// const h2 = document.createElement("h2");
// h2.setAttribute("class", "card-header");
// h2.appendChild(document.createTextNode("my list"));

// const parent = document.querySelector(".card");
// parent.replaceChild(h2, cardHeader);

// *** Classes

let val;
let link;
link = tasklist.children[0].children[0];

// val = link.className;
// val = link.classList;
// val = link.classList[1];

link.classList.add("salam-baku");
link.classList.remove("salam-baku");
// val = link.className;

// *** Attributes

val = link.hasAttribute("Z");

console.log(val);
