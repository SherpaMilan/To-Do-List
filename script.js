const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

todoBtn.addEventListener("click", function addTodo(e) {
  //this is to prevent
  e.preventDefault();

  //this code is to return nthg incase we type nthg
  if (!todoInput.value) {
    return;
  }
  //create to new div
  const newDiv = document.createElement("div");
  newDiv.classList.add("todo");

  //create li
  const newLi = document.createElement("li");
  newLi.innerText = todoInput.value;
  newLi.classList.add("todo-item");

  newDiv.appendChild(newLi);
  //add todos to local storage
  saverLocalTodo(todoInput.value);

  //check button
  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = "<i class='fa-solid fa-check'></i>";
  completeBtn.classList.add("check-btn");
  newDiv.appendChild(completeBtn);
  //deletebutton

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "<i class='fa-sharp fa-solid fa-trash'></i>";
  deleteBtn.classList.add("delete-btn");
  newDiv.appendChild(deleteBtn);

  //append to ul
  todoList.appendChild(newDiv);

  //clear to do input value
  todoInput.value = "";
});

todoList.addEventListener("click", function deleteCheck(e) {
  console.log(e.target);
  const item = e.target;

  //Delete Todo
  console.log(item);
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    todo.remove();
  }

  //check to do
  if (item.classList[0] === "check-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
});

//this is to get set items to local storage
function saverLocalTodo(todo) {
  //check if there is already sthg in  local storage
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
