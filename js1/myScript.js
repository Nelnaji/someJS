let greetings = document.querySelector("h1");

greetings.addEventListener("click", () => {
  greetings.innerHTML =
    greetings.innerHTML === "Bonjour" ? "Bonsoir" : "Bonjour";
    });
