import * as actions from './../actions/actionTypes';

export interface TodoItem {
    id: String;
    value: String;
    isDone: boolean;
}

interface TodoList {
    status: string;
    todos: TodoItem[];
}

const defaultState: TodoList = {
    status: 'init',
    todos: []
};

const addItem = (state: TodoList, action: any) : TodoList => {
    console.log(state);
    console.log(action);
    return state;
};

const reducer = (state: TodoList = defaultState, action: any) : TodoList => {
    switch (action.type) {
        case actions.ADD_ITEM:
            return addItem(state, action);
        default: return state;
    }
};
export default reducer;