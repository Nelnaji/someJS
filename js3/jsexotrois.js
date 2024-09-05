let myList = document.querySelector("ul");
let btnAdd = document.querySelector(".btn");
let btnDel = document.querySelector(".btn-del");
let inputField = document.querySelector("input");
let inputFieldNumber = document.querySelector("#numberElement");

let elementGenerator = function () {
  let fieldNumber = +inputFieldNumber.value;
  for (let count = 0; count <= fieldNumber; count++) {
    let myDate = new Date();
    myDate.toLocaleString();
    console.log(myDate.toLocaleDateString());
    // setTimeout(() => {
    //   let childListE = document.createElement("li");
    //   childListE.innerHTML = `${inputField.value} ${
    //     day + myDays
    //   }/${month}/${myDate.getFullYear()}`;

    //   myList.appendChild(childListE);
    //   myDays++;
    // }, count * 500);
  }
};

// let inputField = document.createElement("input");

btnAdd.addEventListener("click", elementGenerator);

btnDel.addEventListener("click", () => {
  if (myList.children.length != 0) {
    console.log("no child to remove");
  }

  let fieldNumber = +inputFieldNumber.value;
  for (let i = 0; i <= fieldNumber; i++) {
    myList.removeChild(myList.lastChild);
  }
});
