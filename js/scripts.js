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
    if (name === "Reed") {
      document.getElementById("Reed").removeAttribute ("class");
      document.getElementById("letterBody").setAttribute("class", "hidden");
    }
  }
}

function createLetter() {
  let form = document.querySelector("form");
  setLetter(form);
  resetLetter(form);
  respond();
}

function respond() {
  let respond = document.getElementById("responseButton");
  respond.onclick = function() {
    const response = document.getElementById("response").value; 
    document.querySelector("span#letterBody").innerText = response;
  
  }
}


window.onload = function () {
  createLetter();
}