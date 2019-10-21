import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actions from './../../store/actions/todoActions';
import TodoItem from "../../model/TodoItem";
import Item from "../todoItem/Item";

interface IProps {
    todos: TodoItem[];
    loadFromLocalStorage: () => void;
}

class TasksList extends Component<IProps, {}> {
    componentDidMount() {
        this.props.loadFromLocalStorage();
    }

    render() {
        let list: any = "Вы выполнили все задания";
        if (this.props.todos.length > 0) {
            list = this.props.todos.map(todo => {
                return <Item key={todo.id} id={todo.id} isDone={todo.isDone} value={todo.value}/>
            });
        }
        return (
            <div>
                <h1>Список задач</h1>
                {list}
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        todos: state.todos
    }
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        loadFromLocalStorage: () => dispatch(actions.loadFromLocalStorage())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(TasksList);