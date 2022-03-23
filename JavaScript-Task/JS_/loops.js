// // for

// for (let i = 0; i < 3; i++) {
//   if (i == 3) {
//     console.log("en sevdiyim reqem" + i);
//     continue;
//   }
//   if (i == 7) {
//     console.log("en sevdiyim reqem" + i);
//     break;
//   }
//   console.log(i);
// }
// // while
// let a = 0;
// while (a < 8) {
//   console.log(a);
//   a++;
// }

// //while do

// let j = 0;
// do {
//   console.log(j);
//   j++;
// } while (j < 4);

//
let val = "\n";
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    val += "* ";
  }
  val += "\n";
}
console.log(val);
