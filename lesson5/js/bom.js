
const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener('click', () => {
  let myItem = input.value;
  input.value = "";

  let listItem = document.createElement("li");
  let listText = document.createElement("span");
  let deleteButton = document.createElement("button");

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(deleteButton);
  deleteButton.textContent = "❌";
  list.appendChild(listItem);
  deleteButton.onclick = function(e) {
    list.removeChild(listItem);
  };
  input.focus();
});
