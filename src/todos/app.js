import html from "./app.html?raw";
import todoStore from "../store/todo.store";
import { renderTodos } from "./models/use-cases";

const ElementsIds = {
    todoList: ".todo-list",
    addTodo: "#new-todo-input",
    completed: "a[href='#/completed']",
}

export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElementsIds.todoList, todos);
    }

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();

        const $input = document.querySelector(ElementsIds.addTodo);
        $input.addEventListener("keydown", function(event) {
            if(event.key === "Enter") {
                todoStore.addTodo($input.value);
                displayTodos();
                $input.value = "";
            }
        });

        document.querySelector(ElementsIds.todoList).addEventListener("click", (event) => {
            if (!event.target.classList.contains("destroy")) {
                const parentItem = event.target.closest("li");
                const id = parentItem.dataset.id;
                todoStore.toggleTodo(parseInt(id));
                displayTodos();
            }

            if (event.target.classList.contains("destroy")) {
                const parentItem = event.target.closest("li");
                const id = parentItem.dataset.id;
                todoStore.deleteTodo(parseInt(id));
                displayTodos();
            }
        });

        /*const $completedFilter = document.querySelector(ElementsIds.completed)
        $completedFilter.addEventListener("click", function() {
            todoStore.setSelectedFilter("Completed");
            const todos = todoStore.getTodos(todoStore.getCurrentFilter());
            renderTodos(ElementsIds.todoList, todos);
        })*/
    })();

}