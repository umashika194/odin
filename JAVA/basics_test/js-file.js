const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content","lol");
content.textContent = "This is the gloriddddqwdqwous text-coqwdntent!";

container.appendChild(content);

const body = document.querySelector("body");

const para = document.createElement("p");
para.classList.add("red");
para.textContent = "Hey I'm red!";
para.setAttribute("style", "color: red");

body.appendChild(para);

const h3 = document.createElement("h3");
h3.classList.add("blue");
h3.textContent = "I'm a blue h3";
h3.setAttribute("style", "color: blue");

body.appendChild(h3);

const anotherdiv = document.createElement("div");
anotherdiv.setAttribute("style", "border: 1px solid black");
anotherdiv.setAttribute("style", "background-color: pink");
const anotherh3 = document.createElement("h3");
anotherh3.textContent = "I'm in a div";
const anotherpara = document.createElement("p");
anotherpara.textContent = 'ME TOO!';
anotherdiv.appendChild(anotherh3);
anotherdiv.appendChild(anotherpara);
body.appendChild(anotherdiv);


const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  alert("Hello WorlYOLOLd");
});

function alertFunction() {
  alert("YAY! YOUddd DID IT!");
}
const btn3 = document.querySelector("#btn3");
//btn3.addEventListener("click", alertFunction);
btn3.addEventListener("click", function (e) {
  e.target.style.background = "yellow";
});

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
