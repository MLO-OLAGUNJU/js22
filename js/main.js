// JavaScript Event Listeners

const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");

//Syntax: addEventListener(event, function, useCapture)

const doSomething = () => {
  alert("doing something");
};

h2.addEventListener("click", doSomething, false);
h2.removeEventListener("click", doSomething, false);

h2.addEventListener("click", (even) => {
  console.log(even.target);
  even.target.textContent = "clicked by MLO";
});
