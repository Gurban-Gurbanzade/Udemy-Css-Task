// Traversing the Dom

let val;

let list = document.querySelector(".list-group");

val = list;
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

val = list.children;
val = list.children[2];
val = list.children[2].textContent = "salam baku";
val = list.children[2].children;
val = list.firstChild;
val = list.firstElementChild;
val = list.lastElementChild;
val = list.childElementCount;
val = list.parentNode;
val = list.parentElement.parentElement;
val = list.children[0].nextSibling;
val = list.children[2].previousElementSibling;

for (let i = 0; i < list.children.length; i++) {
  console.log(list.children[i]);
}

console.log(val);
