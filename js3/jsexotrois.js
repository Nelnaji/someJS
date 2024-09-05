let myList = document.querySelector("ul");
let btnAdd = document.querySelector(".btn");
let btnDel = document.querySelector(".btn-del");
let inputField = document.querySelector("input");
let inputFieldNumber = document.querySelector("#numberElement");
// let inputField = document.createElement("input");

btnAdd.addEventListener("click", () => {
  let fieldNumber = +inputFieldNumber.value;
  for (let count = 0; count <= fieldNumber; count++) {
    let childListE = document.createElement("li");
    childListE.innerHTML = inputField.value;
    myList.appendChild(childListE);
  }
});

btnDel.addEventListener("click", () => {
  if (myList.children.length != 0) {
    console.log("no child to remove");
  }
  myList.removeChild(myList.lastChild);
});
