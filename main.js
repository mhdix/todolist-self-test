const todos = []

// select
const todoInput = document.querySelector('.todo-input')
const todoForm = document.querySelector(".todo-form");
const todoList = document.querySelector(".todolist");


// event
todoForm.addEventListener('submit' , addNewTodo)


// function

function addNewTodo(e) {
    e.preventDefault()
    const newTodo = {
        id: Date.now(),
        createdAt: new Date().toISOString(),
        title: todoInput.value,
        completed: false
    }

    todos.push(newTodo)
    createTodo(todos)

}

function createTodo (
    todos) {
    let result = ''

    todos.forEach((todo) => {
        result += `
        <li class="todo">
          <p class="todo__title">${todo.title}</p>
          <span class="todo__createdAt">1402/1/28</span>
          <button data-todo-id=${todo.id}><i class="todo__check far fa-check-square"></i></button>
          <button data-todo-id=${todo.id}><i class="todo__remove far fa-trash-alt"></i></button>
        </li>
        `;
    })
    todoList.innerHTML = result
    todoInput.value = ''

    // todo delete
    
    
}