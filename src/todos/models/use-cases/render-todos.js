import { createItmTodoNode } from "./create-todo-html";
import {Todo} from "../todo.model";


/**
 * 
 * @param {String} elementoId 
 * @param {Todo} todos 
 */
export const renderTodos = (elementId, todos = []) => {
    console.log(elementId);
    console.log(todos);
    const $todoList = document.querySelector(elementId);
    $todoList.innerHTML = "";
    todos.forEach(todo => {
        const todoElement = createItmTodoNode(todo);
        $todoList.appendChild(todoElement);
    });
}


/*export const renderFilteredTodos = (elementId, todos) => {
    const $todoList = document.querySelector(elementId);
    todos.forEach(todo => {
        const todoElement = createItmTodoNode(todo);
        $todoList.appendChild(todoElement);
    });
}*/