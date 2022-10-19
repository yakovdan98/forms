function letterFormat() {
  const name = document.getElementById("nameInput").value;
  document.querySelector("span#name").innerText = name;
}

function createLetter() {
  let form = document.querySelector("form");
  form.onsubmit = function (event) {
    letterFormat();
    event.preventDefault();
    document.getElementById("letter").removeAttribute("class");
  }

}
window.onload = function () {
  createLetter();
}