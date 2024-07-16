let todos = [];

// select
const todoInput = document.querySelector(".todo-input");
const todoForm = document.querySelector(".todo-form");
const todoList = document.querySelector(".todolist");

// event
todoForm.addEventListener("submit", addNewTodo);

// function

function addNewTodo(e) {
  e.preventDefault();
  const newTodo = {
    id: Date.now(),
    createdAt: new Date().toISOString(),
    title: todoInput.value,
    completed: false,
  };

  todos.push(newTodo);
  createTodo(todos);
}

function createTodo(todos) {
  let result = "";

  todos.forEach((todo) => {
    result += `
        <li class="todo">
          <p class="todo__title">${todo.title}</p>
          <span class="todo__createdAt">1402/1/28</span>
          <button data-todo-id=${todo.id} class="todo__check"><i class="far fa-check-square"></i></button>
          <button data-todo-id=${todo.id} class="todo__remove"><i class="far fa-trash-alt"></i></button>
        </li>
        `;
  });
  todoList.innerHTML = result;
  todoInput.value = "";

  // todo delete
  const todoDeleteBtn = [...document.querySelectorAll(".todo__remove")];
  todoDeleteBtn.forEach((btn) => btn.addEventListener("click", removeTodos));
}

function removeTodos(e) {
  const todoId = Number(e.target.dataset.todoId);
  todos = todos.filter((todo) => todo.id !== todoId);
  createTodo(todos);
}
