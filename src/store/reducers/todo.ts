import * as actions from './../actions/actionTypes';
import TodoItem from "../../model/TodoItem";

interface TodoList {
    todos: TodoItem[];
}

const defaultState: TodoList = {
    todos: []
};

const addItem = (state: TodoList, action: any): TodoList => {
    const todos = [...state.todos, action.todo];
    return {...state, todos: todos};
};

const deleteItem = (state: TodoList, id: string): TodoList => {
    const todos = state.todos.filter(todo => {
        return todo.id !== id
    });
    return {...state, todos: todos};
}
const editItem = (state: TodoList, id: string, value: string): TodoList => {
    const todos = state.todos.map(todo => {
        if (todo.id === id) {
            todo.value = value;
        }
        return todo;
    });

    return {...state, todos: todos};
};
const completeItem = (state: TodoList, id: string): TodoList => {
    const todos = state.todos.map(todo => {
        if (todo.id === id) {
            todo.isDone = !todo.isDone;
        }
        return todo;
    });
    return {...state, todos: todos};
};
const saveToLocalStorate = (state: TodoList) => {
    localStorage.setItem('todos', JSON.stringify(state.todos));
    return state;
};
const loadFromLocalStorage = (state: TodoList) => {
    const jsonTodo = localStorage.getItem('todos');
    if (jsonTodo){
        const todos = JSON.parse(jsonTodo as string);
        state = {...state, todos: todos}
    }
    return state;
};
const reducer = (state: TodoList = defaultState, action: any): TodoList => {
    switch (action.type) {
        case actions.ADD_ITEM:
            return addItem(state, action);
        case actions.DELETE_ITEM:
            return deleteItem(state, action.id);
        case actions.EDIT_ITEM:
            return editItem(state, action.id, action.value);
        case actions.COMPLETE_ITEM:
            return completeItem(state, action.id);
        case actions.SAVE_TO_LOCALSTORE:
            return saveToLocalStorate(state);
        case actions.LOAD_FROM_LOCALSTORE:
            return loadFromLocalStorage(state);
        default:
            return state;
    }
};
export default reducer;