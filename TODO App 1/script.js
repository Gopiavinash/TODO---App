const todoList = document.getElementById("todo-list");
const userInput = document.getElementById("todoUserInput");
const addTodoButton = document.getElementById("addTodoButton");
let todos = [];

addTodoButton.addEventListener("click", function () {
  let task = userInput.value;

  if (!task) {
    alert("Enter some Task TODO");
    return;
  }

  todos.push({
    text: task,
    status: 0,
  });
  refreshTodos();
  userInput.value = "";
});

function toggleStatus(index) {
  let task = todos.find((task, i) => i === index);
  task.status = !task.status;
  todos[index] = task;
  refreshTodos();
}

function trashTask(index) {
  todos.splice(index, 1); // Learnt about splice Method
  refreshTodos();
}

function refreshTodos() {
  todoList.innerHTML = "";

  // Learnt Foreach
  todos.forEach((task, index) => {
    // Learnt String Literals
    // Learnt about onchange
    // Learnt about onclick

    todoList.innerHTML += `<div class="task">
            <input type="checkbox" onchange="toggleStatus(${index})" ${
      task.status ? "checked" : ""
    }>
            <p>${task.text}</p>
            <span class="trash" title="Remove" onclick="trashTask(${index})">&times;</span>
        </div>`;
  });
}
