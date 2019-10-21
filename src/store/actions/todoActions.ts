import * as actions from './actionTypes';
import TodoItem from "../../model/TodoItem";


//добавить элемента
export const addItem = (item: TodoItem) => {
    return {
        type: actions.ADD_ITEM,
        todo: item
    }
};
//удалить элемента
export const deleteItem = (id: string) => {
    return {
        type: actions.DELETE_ITEM,
        id: id
    }
};
//изменить элемента
export const editItem = (id: string, value: string) => {
    return {
        type: actions.EDIT_ITEM,
        id: id,
        value: value
    }
};
//статус выполнения
export const setComplete = (id: string) => {
    return {
        type: actions.COMPLETE_ITEM,
        id: id
    }
};
//сохранить в память
export const saveToLocalStorage = () => {
    return{
        type: actions.SAVE_TO_LOCALSTORE,
    }
};

//загрузить из памяти
export const loadFromLocalStorage = () =>{
    return{
        type: actions.LOAD_FROM_LOCALSTORE,
    }
};