document.addEventListener("DOMContentLoaded", () => {
  const addBtn = $("#addBtn");
  const newToDo = $("#newToDo");
  const todoContainer = $("#todo-container");

  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  renderToDo();

  addBtn.click(async function () {
    const toDo = newToDo.val();

    if (!toDo) {
      alert("Write a new todo!");
      return;
    }

    todos.push({ todo: toDo });
    localStorage.setItem("todos", JSON.stringify(todos));

    newToDo.val("");

    renderToDo();
  });

  newToDo.keypress(function (e) {
    if (e.which === 13) {
      addBtn.click();
    }
  });

  function renderToDo() {
    todoContainer.empty();
    if (todos.length === 0) {
      todoContainer.html('<div class="text-center no-do">Nothing to do...</div>')
    }
    todos.forEach((todo) => {
      updateToDo(todo.todo);
    });
  }

  function updateToDo(todo) {
    const todoElement = $(
      `<div class="card text-center">
        <i class="fas fa-trash-alt delete-icon original-mode"></i>
        <div class="mt-3 note">
          ${todo}
        </div>
      </div>`
    );

    todoElement.find('.delete-icon').click(function () {
      deleteToDo(todo);

    });

    todoContainer.append(todoElement);
}

  function deleteToDo(todo) {
    const index = todos.findIndex(item => item.todo === todo);
    todos.splice(index, 1);

    localStorage.setItem('todos', JSON.stringify(todos));

    renderToDo();
  }
});
