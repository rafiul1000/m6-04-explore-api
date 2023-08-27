function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodos(data));
}

function displayTodos(todos){
    const testTodosContainer = document.getElementById('test-todos-container');
    for(const todo of todos){
        const creatTodoElement = document.createElement('div');
        creatTodoElement.innerHTML = `
        <h3>title: ${todo.title}</h3>
        <p>user Id: ${todo.userId}</p>
        <p>completed: ${todo.completed}</p>
        `;
        testTodosContainer.appendChild(creatTodoElement);
    }
}


loadTodos();