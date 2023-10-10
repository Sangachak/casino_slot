// let ran1=Math.floor((Math.random()*3)+1);
// let ran2=Math.floor((Math.random()*3)+1);
// let ran3=Math.floor((Math.random()*3)+1);
let b1 = document.querySelector("#sb1");
let b2 = document.querySelector("#sb2");
let b3 = document.querySelector("#sb3");
const result = document.querySelector("#result");
const submit = document.querySelector("#sbt");
const playAgain = document.querySelector("#playAgain");

let play = true;

if (play) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    generate();
  });
}

function generate() {
  let ran1 = Math.floor(Math.random() * 3 + 1);
  let ran2 = Math.floor(Math.random() * 3 + 1);
  let ran3 = Math.floor(Math.random() * 3 + 1);
  b1.innerHTML = ran1;
  b2.innerHTML = ran2;
  b3.innerHTML = ran3;
  check(ran1, ran2, ran3);
}

function check(ran1, ran2, ran3) {
  if (ran1 === ran2 && ran2 === ran3) {
    result.innerHTML = `You Won!`;
    play = false;
    again();
    submit.setAttribute("disabled", "");
  } else {
    result.innerHTML = `No luck this time.`;
    play = false;
    again();
    submit.setAttribute("disabled", "");
  }
}

function again() {
  playAgain.removeAttribute("disabled");
  playAgain.addEventListener("click", (e) => {
    b1.innerHTML = "";
    b2.innerHTML = "";
    b3.innerHTML = "";
    result.innerHTML='';
    let ran1 = Math.floor(Math.random() * 3 + 1);
    let ran2 = Math.floor(Math.random() * 3 + 1);
    let ran3 = Math.floor(Math.random() * 3 + 1);
    playAgain.setAttribute("disabled", "");
    submit.removeAttribute("disabled");
  });
}
