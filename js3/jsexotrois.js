let myList = document.querySelector("ul");
let btnAdd = document.querySelector(".btn");
let btnDel = document.querySelector(".btn-del");
let inputField = document.querySelector("input");

// let inputField = document.createElement("input");

btnAdd.addEventListener("click", () => {
  let childListE = document.createElement("li");
  childListE.innerHTML = inputField.value;
  myList.appendChild(childListE);
});

btnDel.addEventListener("click", () => {
  if (myList.children.length < 1) {
    console.log("no child to remove");
  }
  myList.removeChild(myList.lastChild);
});
