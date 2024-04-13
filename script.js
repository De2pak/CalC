const btn = document.querySelectorAll(".btn");
const screen = document.querySelector("#screen");
let btnArray = Array.from(btn);
let str = "";
for (let val of btnArray) {
  val.addEventListener("click", () => {
    if (val.innerHTML == "=") {
      str = screen.value;
      str = String(eval(str));
      screen.value = str;
    } else if (val.innerHTML == "AC") {
      str = "";
      screen.value = str;
    } else if (val.innerHTML == "DEL") {
      str = screen.value;
      str = str.substring(0, str.length - 1);
      screen.value = str;
    } else {
      str = val.innerHTML;
      screen.value += str;
    }
  });
}
