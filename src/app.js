/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/sleep-man.png";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = excuseGenerator();
};

function excuseGenerator() {
  let who = ["Un fantasma", "Mi abuelita", "Tu gato", "Mi perro"];
  let what = ["comió", "se meó", "me golpeó", "cayó"];
  let when = [
    "antes de llegar",
    "justo a tiempo",
    "cuando desperté",
    "mientras comía",
    "esta mañana"
  ];
  function randomArray(array) {
    let rand = array[Math.floor(Math.random() * array.length)];
    return rand;
  }

  return randomArray(who) + " " + randomArray(what) + " " + randomArray(when);
}
