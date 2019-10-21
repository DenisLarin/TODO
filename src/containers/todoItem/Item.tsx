import React, {Component, CSSProperties} from 'react';
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import InputField from '../../components/inputFields/text/InputField';
import Checkbox from "../../components/inputFields/checkbox/Checkbox";
import {connect} from "react-redux";
import * as actions from './../../store/actions/todoActions'

interface IProps {
    value: string;
    isDone: boolean;
    id: string;
    deleteItem: (id: string) => void;
    editItem: (id: string, value: string) => void;
    doneItem: (id: string) => void;
    saveToLocalStorage: () => void;
}

interface IState {
    isEdit: boolean,
    editableValue: string
}

class Item extends Component<IProps, IState> {
    state = {
        isEdit: false,
        editableValue: "",
    };
    save = () => {
        this.props.saveToLocalStorage();
    };
    onDoneClick = () => {
        this.props.doneItem(this.props.id);
        this.save();
    };
    onEditClick = () => {

        this.setState({
            isEdit: true,
            editableValue: this.props.value
        });
    };
    onDeleteClick = (id: string) => {
        if (this.state.isEdit) {
            this.onCancelEditClick();
            return;
        }
        this.props.deleteItem(id);
        this.save();
    };
    onChangeInputFieldHandler = (event: any) => {
        this.setState({
            editableValue: event.target.value
        });
    };
    onCancelEditClick = () => {
        this.setState({
            isEdit: false,
            editableValue: ""
        });
    };
    onAcceptEditClick = () => {
        if (this.state.editableValue === ""){
            this.props.editItem(this.props.id, this.props.value);
        }
        else{
            this.props.editItem(this.props.id, this.state.editableValue);
        }
        if(this.props.isDone){
            this.onDoneClick();
        }
        this.save();
        this.setState({
            isEdit: false,
            editableValue: ""
        });
    };

    onKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            this.onAcceptEditClick();
        }
    };
    render() {
        let styles = {opacity: '0.5'} as CSSProperties;
        if(!this.props.isDone){
            styles = {...styles, opacity: 1}
        }
        return (
            <Card styles={styles} classes="item">
                <Checkbox checked={this.props.isDone} onCheckClick={this.onDoneClick}/>
                <InputField isEditing={this.state.isEdit} classes="itemInput" disabled={!this.state.isEdit} onChange={(event) => this.onChangeInputFieldHandler(event)}
                            value={this.state.isEdit ? this.state.editableValue : this.props.value} onKeyDown={this.onKeyDown}/>
                {this.state.isEdit ? <Button type="acceptEdit" onClick={this.onAcceptEditClick}/> :
                    <Button type="edit" onClick={this.onEditClick}/>}
                <Button type="delete" onClick={() => this.onDeleteClick(this.props.id)}/>
            </Card>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        deleteItem: (id: string) => dispatch(actions.deleteItem(id)),
        editItem: (id: string, value: string) => dispatch(actions.editItem(id, value)),
        doneItem: (id: string) => dispatch(actions.setComplete(id)),
        saveToLocalStorage: () => dispatch(actions.saveToLocalStorage()),
    }
};

export default connect(null, mapDispatchToProps)(Item);