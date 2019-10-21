import React from 'react';
import './App.css';
import TasksList from "./containers/tasksList/TasksList";
import Header from "./containers/header/Header";

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Todo List</h1>
            <Header/>
            <TasksList/>
        </div>
    );
}

export default App;
