function resetLetter(form) {
  form.onreset = function (event) {
    document.getElementById("letter").setAttribute("class", "hidden");
  }
}

function setLetter(form) {
  form.onsubmit = function (event) {
    event.preventDefault();
    const name = document.getElementById("nameInput").value;
    document.querySelector("span#name").innerText = name;
    document.getElementById("letter").removeAttribute("class");
  }
}

function createLetter() {
  let form = document.querySelector("form");
  setLetter(form);
  resetLetter(form);
}

window.onload = function () {
  createLetter();
}