let todos = [];
// select
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todolist");

// event
todoForm.addEventListener("submit", addNewTodo);

//  function

// todo add todo
function addNewTodo(e) {
  e.preventDefault();

  const newTodo = {
    id: Date.now(),
    title: todoInput.value,
    createAt: new Date().toISOString(),
    isCompleted: false,
  };

  todos.push(newTodo);
  createTodo(todos);
  todoInput.value = "";
}
// todo create
function createTodo(todos) {
  let result = "";


  todos.forEach((todo) => {
    result += `
        <li class="todo">
            <p class="todo__title">${todo.title}</p>
            <span class="todo__createdAt">${new Date(todo.createAt).toLocaleDateString('fa-IR')}</span>
            <button><i class="todo__check far fa-check-square"></i></button>
            <button><i class="todo__remove far fa-trash-alt"></i></button>
        </li>
      `;
  });

  todoList.innerHTML = result;
}
