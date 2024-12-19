export default class ButtonHandler {
  constructor(buttonElementId) {
    this.buttonElement = document.getElementById(buttonElementId);
    this.buttonElement.addEventListener("click", this);
    document.getElementById("root").appendChild(this.buttonElement);
  }

  handleEvent(event) {
    fetch("https://dummyjson.com/users/1")
      .then((res) => res.json())
      .then(console.log);
  }
}
