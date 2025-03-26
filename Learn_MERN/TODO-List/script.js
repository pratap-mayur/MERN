const todoInput = document.getElementById('todoInput');
const addtodobtn = document.getElementById('addtodobtn');
const todoList = document.getElementById('todoList');

addTodobtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', function (e){
    if(e.key === 'Enter'){
        addTodo();
    }
});

function addTodo(){
    const todoText = todoInput.value.trim();
    if(todoText !== ''){
        const li = document.createElement('li');
        li.textContent = todoText;
        todoList.appendChild(li);
        todoInput.value = '';
    }
}