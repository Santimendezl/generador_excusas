/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/sleep-man.png";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = excuseGenerator();
};

function excuseGenerator() {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  function randomArray(array) {
    let rand = array[Math.floor(Math.random() * array.length)];
    return rand;
  }

  return randomArray(who) + " " + randomArray(what) + " " + randomArray(when);
}
