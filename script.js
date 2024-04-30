function mkTodoListElement(todoText) {
  const id = Math.random().toString(36).substring(2, 7);
  const listElement = document.createElement("li");
  const textElement = document.createElement("span");
  const btnElement = document.createElement("span");

  listElement.setAttribute("id", id)

  textElement.setAttribute("class", "todo-text");
  textElement.textContent = todoText;

  btnElement.setAttribute("class", "todo-btn");
  btnElement.textContent = "X";
  btnElement.addEventListener("click", () => {
    document.getElementById(id).remove();
  });

  listElement.appendChild(textElement)
  listElement.appendChild(btnElement);
  return listElement;
}