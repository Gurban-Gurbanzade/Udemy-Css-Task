// Mouse Events

const btn = document.querySelector("#btnDeleteAll");
const ul = document.querySelector("#task-list");

// click event
// btn.addEventListener("click", evendHandler);
// ul.addEventListener("click", evendHandler);

// double click event
// btn.addEventListener("dblclick", evendHandler);
// ul.addEventListener("dblclick", evendHandler);

// // mouse downn
// btn.addEventListener("mousedown", evendHandler);

// // mouse up
// btn.addEventListener("mouseup", evendHandler);

// // mouse enter
// btn.addEventListener("mouseenter", evendHandler);

// // mouse leave
// btn.addEventListener("mouseleave", evendHandler);

// mouse over
// ul.addEventListener("mouseover", evendHandler);

// // mouse out
// ul.addEventListener("mouseout", evendHandler);

// mouse move
const h5 = document.querySelector("h5");
ul.addEventListener("mousemove", evendHandler);

function evendHandler(event) {
  console.log(`event type : ${event.type}`);
  console.log(event);
  h5.textContent = `mause x: ${event.offsetX} mause y: ${event.offsetY}`;
}
