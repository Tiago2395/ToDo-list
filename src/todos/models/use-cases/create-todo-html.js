import todoStore from "../../../store/todo.store";

/**
 * 
 * @param {Todo} todo 
 */
export const createItmTodoNode = (todo) => {
    const todoElement = document.createElement("li");
    if (todo.done) {
        todoElement.classList.add("completed");
    }
    todoElement.dataset.id = todo.id;
    buildTodoItemHtml(todo, todoElement);
    /*todoElement.addEventListener("click", function() {
        toggleTodo(todoElement, todo)
    })
    const $deleteButton = todoElement.querySelector(".destroy");
    $deleteButton.addEventListener("click", function() {
        deleteTodo(todoElement, todo.id);
    });*/
    return todoElement;
}

const buildTodoItemHtml = (todo, todoElement) => {
    
    todoElement.innerHTML = `<div class="view">
                                <input class="toggle" type="checkbox" ${todo.done ? "checked" : ""}>
                                <label>${todo.description}</label>
                                <button class="destroy"></button>
                                </div>`
}

/*const toggleTodo = (todoElement, todo) => {
    todo.done = !todo.done;
    todoElement.classList.toggle("completed");
}

const deleteTodo = (todoElement, todoId) => {
    todoStore.deleteTodo(todoId);
    todoElement.remove();
}*/