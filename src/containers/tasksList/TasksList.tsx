import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actions from './../../store/actions/todoActions';

class TasksList extends Component {
    render() {
        return (
            <div>
                <h1>Список задач</h1>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return{
        todos: state.todos
    }
};
const mapDispatchToProps = (dispatch:any) =>{
    return{

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(TasksList);