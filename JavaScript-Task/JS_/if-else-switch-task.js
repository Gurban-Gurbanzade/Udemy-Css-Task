let user = "cancel";
let pasword = "asdkjaslfhas";

switch (user) {
  case "admin":
    switch (pasword) {
      case "themaster":
        console.log("welcome");
        break;
      case "cancel":
        console.log("canceled");
        break;
      default:
        console.log("wrong pasword");
    }
    break;
  case "cancel":
    console.log("canceled");
    break;
  default:
    console.log("i dont now");
}
