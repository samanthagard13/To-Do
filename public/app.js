document.addEventListener("DOMContentLoaded", () => {
  const addBtn = $("#addBtn");
  const newToDo = $("#newToDo");
  const todoContainer = $("#todo-container");

  const todos = JSON.parse(localStorage.getItem('todos')) || [];

  renderToDo();

  addBtn.click(async function () {
    const toDo = newToDo.val();

    if (!toDo) {
      alert("Write a new todo!");
      return;
    }

    todos.push({ todo: toDo });
    localStorage.setItem('todos', JSON.stringify(todos));

    newToDo.val('');

    renderToDo();
   
  });

  function renderToDo() {
    todoContainer.empty();

    todos.forEach(todo => {
      updateToDo(todo.todo);
    });
  }


function updateToDo(todo) {
    const todoElement = $(`<div class="card">${todo}</div>`);

    todoContainer.append(todoElement);
}

});

