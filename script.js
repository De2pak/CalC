const btn = document.querySelectorAll(".btn");
const screen = document.querySelector("#screen");
let modeBtn = document.querySelector("#modeBtn");
 let currMode = "dark";

// Script for Mode change
modeBtn.addEventListener("click",()=>{
  
  if(currMode =="dark"){
    currMode = "light";
    document.querySelector("body").style.backgroundColor = "white";
    modeBtn.innerHTML = "Light Mode";
  }else{
    document.querySelector("body").style.backgroundColor = "burlywood";
    currMode = "dark";
    modeBtn.innerHTML = "Dark Mode";

  }
});


//Script for calculator body
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

};


// script for time 
let time = document.querySelector("#hour");
let time2 = document.querySelector("#minutes");

let date  = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();
if(hour >12){
  hour = hour-12;
}
time.value = hour;
time2.value = minutes;
console.log(hour , minutes);



