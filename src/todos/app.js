import html from "./app.html?raw";
import todoStore from "../store/todo.store";
import { renderTodos } from "./models/use-cases";

const ElementsIds = {
    todoList: ".todo-list",
}

export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElementsIds.todoList, todos);;
    }

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

}