import html from "./app.html?raw";
import todoStore from "../store/todo.store";
import { renderTodos } from "./models/use-cases";

const ElementsIds = {
    todoList: ".todo-list",
    addTodo: "#new-todo-input",
    completed: "a[href='#/completed']",
    clrearCompleted: ".clear-completed",
    pendingCount: "#pending-count",
    filter: ".filtro",
}

export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        if (todoStore.getCurrentFilter() !== "Completed") {
            let count = 0;
            todos.forEach((item) => !item.done ? count++ : count);
            const $pendingTodos = document.querySelector(ElementsIds.pendingCount);
            $pendingTodos.innerHTML = count;
        }
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

        document.querySelector(ElementsIds.clrearCompleted).addEventListener("click", () => {
            todoStore.deleteCompleted();
            displayTodos();
        });

        const $filters = document.querySelectorAll(ElementsIds.filter);
        $filters.forEach(filter => {
            filter.addEventListener("click", (event) => {
                $filters.forEach(item => item !== event.target ? item.classList.remove("selected") : item.classList.add("selected"));
                const currentFilter = filter.getAttribute("href").split("/")[1];
                if(currentFilter) {
                    currentFilter === "completed" ? todoStore.setSelectedFilter("Completed") : todoStore.setSelectedFilter("Pending");
                } else {
                    todoStore.setSelectedFilter("all");
                }
                displayTodos();
            })
        })

    })();

}