
/**
 * 
 * @param {Todo} todo 
 */
export const createItmTodoNode = (todo) => {
    const todoElement = document.createElement("li");
        if (todo.done) {
            todoElement.classList.add(checked);
        }
        buildTodoItemHtml(todo, todoElement);
        return todoElement;
}

const buildTodoItemHtml = (todo, todoElement) => {
    
    todoElement.innerHTML = `<div class="view">
                                <input class="toggle" type="checkbox">
                                <label>${todo.description}</label>
                                <button class="destroy"></button>
                                </div>`
}