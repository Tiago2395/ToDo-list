import { createItmTodoNode } from "./create-todo-html";


/**
 * 
 * @param {String} elementoId 
 * @param {Todo} todos 
 */
export const renderTodos = (elementoId, todos = []) => {
    console.log(elementoId);
    console.log(todos);
    const $todoList = document.querySelector(elementoId);
    todos.forEach(todo => {
        const todoElement = createItmTodoNode(todo);
        $todoList.appendChild(todoElement);
    });
}

