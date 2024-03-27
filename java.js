// Array para almacenar las tareas
let todos = [];

// Elementos del DOM
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const fastestTaskBtn = document.getElementById('fastestTaskBtn');
const clearAllBtn = document.getElementById('clearAllBtn');

// Función para agregar una tarea
function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    const todo = {
      text: todoText,
      completed: false,
      createdAt: new Date(),
      completedAt: null
    };
    todos.push(todo);
    renderTodos();
    todoInput.value = '';
  }
}

// Función para renderizar las tareas
function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    const dateText = `(${formatDate(todo.createdAt)})`; // Formatea la fecha
    li.textContent = `${todo.text} ${dateText}`;
    if (todo.completed) {
      li.classList.add('completed');
    }
    li.addEventListener('click', () => toggleTodo(index));
    todoList.appendChild(li);
  });
}

// Función para formatear la fecha como "DD/MM/YYYY HH:MM:SS"
function formatDate(date) {
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  return date.toLocaleString('en-US', options);
}

// Función para marcar una tarea como completada
function toggleTodo(index) {
  todos[index].completed = !todos[index].completed;
  if (todos[index].completed) {
    todos[index].completedAt = new Date();
  } else {
    todos[index].completedAt = null;
  }
  renderTodos();
}

// Función para encontrar la tarea más rápida en completarse
function findFastestTask() {
  let fastestTask = null;
  todos.forEach(todo => {
    if (todo.completed && (!fastestTask || todo.completedAt < fastestTask.completedAt)) {
      fastestTask = todo;
    }
  });
  return fastestTask;
}

// Función para borrar todas las tareas
function clearAllTodos() {
  todos = [];
  renderTodos();
}

// Event Listeners
addBtn.addEventListener('click', addTodo);
fastestTaskBtn.addEventListener('click', () => {
  const fastestTask = findFastestTask();
  if (fastestTask) {
    alert(`The fastest task completed: "${fastestTask.text}"`);
  } else {
    alert('No tasks completed yet.');
  }
});
clearAllBtn.addEventListener('click', clearAllTodos);

// Inicialización
renderTodos();
