import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actions from './../../store/actions/todoActions'
import Card from "../../components/card/Card";
import InputField from "../../components/inputFields/text/InputField";
import Button from "../../components/button/Button";
import './header.css'
import TodoItem from "../../model/TodoItem";

interface IState {
    inputFieldValue: string
}

interface IProps {
    addNew: (item: TodoItem) => void;
    saveToLocalStorage: () => void;
}

class Header extends Component<IProps, IState> {
    state = {
        inputFieldValue: ""
    };
    onChangeInputFieldHandler = (event: any) => {
        this.setState({
            inputFieldValue: event.target.value
        });
    };
    addNewItem = () => {
        if (!this.state.inputFieldValue) {
            return;
        }
        const id = Date.now().toString();
        const newTodo: TodoItem = {id, value: this.state.inputFieldValue, isDone: false};
        this.props.addNew(newTodo);
        this.props.saveToLocalStorage();
        this.setState({
            inputFieldValue: ""
        })
    };

    onKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            this.addNewItem();
        }
    };

    render() {
        return (
            <Card>
                <p>Добавьте Ваши дела</p>
                <div className="control">
                    <InputField onChange={(event) => this.onChangeInputFieldHandler(event)}
                                value={this.state.inputFieldValue} onKeyDown={this.onKeyDown}/>
                    <Button type="add" onClick={this.addNewItem}/>
                </div>
            </Card>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addNew: (item: TodoItem) => dispatch(actions.addItem(item)),
        saveToLocalStorage: () => dispatch(actions.saveToLocalStorage()),
    }
}

export default connect(null, mapDispatchToProps)(Header);