// Event Listeners

const btn = document.querySelector("#btnDeleteAll");
const btn2 = document.querySelector("#btnAddNewTask");

btn.addEventListener("mouseover", function (e) {
  //console.log("btn clicked");
  let val;
  val = e;
  val = e.target;
  val = e.target.id;
  val = e.target.classList;
  val = e.type;
  console.log(val);
  e.preventDefault();
});

// btn.addEventListener("click", btnClick);
// btn2.addEventListener("click", btnClick);
// function btnClick() {
//   console.log("btn Clicked");
// }
