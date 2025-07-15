import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: "all",
    Completed: "Completed",
    Pending: "Pending",

}

const state = {
    todos: [
        new Todo("Piedra del alma"),
        new Todo("Piedra del infinito"),
        new Todo("Piedra del tiempo"),
    ],
    filter: Filters.All,
}


const initStore = () => {
    console.log(state);
    console.log("InitStore");
}

const loadStore = () => {
    throw new Error("Not Implemented");
}

/**
 * 
 * @param {String} filter 
 */
const getTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos]; //Usamos el operador spread para no pasar el objeto por referencia sino uno nuevo

        case Filters.Completed:
            return state.todos.filter(todoItem => todoItem.done);

        case Filters.Pending:
            return state.todos.filter(todoItem => !todoItem.done);

        default:
            throw new Error("This filter does not exists.");
    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    if (!description) {
        throw new Error("Description is required");
    }

    const newTodo = new Todo(description);
    state.todos.push(newTodo);  // === state.todos = [newTodo, state.todos];
}

/**
 * 
 * @param {number} todoId 
 */
const toggleTodo = (todoId) => {
    state.todos = state.todos.map(todo => {
        if (todoId === todo.id) {
            todo.done = !todo.done;
        }
        return todo;
    });
}

/**
 * 
 * @param {number} todoId 
 */
const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(itemTodo => itemTodo.id !== todoId);
}

const deleteCompleted = () => {
     state.todos = state.todos.filter(itemTodo => !itemTodo.done);
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setSelectedFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
}


const getCurrentFilter = () => {
    return state.filter;
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setSelectedFilter,
    toggleTodo,
}