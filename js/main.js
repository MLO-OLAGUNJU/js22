// JavaScript Event Listeners

/* const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2"); */

//Syntax: addEventListener(event, function, useCapture)

/* const doSomething = () => {
  alert("doing something");
};

h2.addEventListener("click", doSomething, false);
h2.removeEventListener("click", doSomething, false);

h2.addEventListener("click", (myEvent) => {
  console.log(myEvent.target);
  myEvent.target.textContent = "clicked by MLO";
}); */

//view 2
/* document.addEventListener("readystatechange", (myEvent) => {
  if (myEvent.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
});

const initApp = () => {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");

  view.addEventListener(
    "click",
    (myEvent) => {
      // myEvent.stopPropagation();
      view.classList.toggle("purple");
      view.classList.toggle("darkblue");
    },
    false
  );
  div.addEventListener(
    "click",
    (myEvent) => {
      // myEvent.stopPropagation();
      div.classList.toggle("blue");
      div.classList.toggle("black");
    },
    false
  );
  h2.addEventListener(
    "click",
    (myEvent) => {
      // myEvent.stopPropagation();
      const myText = myEvent.target.textContent;
      myText === "My 2nd View"
        ? (myEvent.target.textContent = "clicked")
        : (myEvent.target.textContent = "My 2nd View");
    },
    false
  );

  const nav = document.querySelector("nav");
  nav.addEventListener("mouseover", (myEvent) => {
    myEvent.target.classList.add("height100");
  });
  nav.addEventListener("mouseout", (myEvent) => {
    myEvent.target.classList.remove("height100");
  });
}; */

// view 3

document.addEventListener("readystatechange", (myEvent) => {
  if (myEvent.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
});

const initApp = () => {
  const view3 = document.querySelector("#view3");
  const myForm = view3.querySelector("#myForm");
  myForm.addEventListener("submit", (myEvent) => {
    myEvent.preventDefault();
    console.log("submit event");
  });
};
