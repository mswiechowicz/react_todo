import React, {Component} from 'react';
import './TodoApp.css';
import TaskAdder from "./Components/TaskAdder/TaskAdder";
import TodoList from "./Components/TodoList/TodoList";

class TodoApp extends Component {
    state = {
        todoList: [
            // { task_name: "tadanie", task_deadline: "2021.02.13", task_priority: false },
            // { task_name: "aadanie 2", task_deadline: "2021.02.13", task_priority: false }
        ],
        doneList: [
            // { task_name: "Zadanie 2", task_deadline: "2021.02.13", task_done: "2021.02.14, 19:27:47", task_priority: false }
        ],
    };

    handleAddTask = props => {
        this.setState({ todoList: this.state.todoList.concat(props) });
    };

    handleRemoveTask = (index, type) => {
        const taskList =  [...this.state[type]];
        taskList.splice(index, 1);
        this.setState({ [type]: taskList });
    };

    handleDoneTask = index => {
        const todoList = [ ...this.state.todoList ];
        const doneTask = todoList.splice(index, 1);
        doneTask.task_done = new Date().toLocaleString();
        this.setState({
            doneList: this.state.doneList.concat(doneTask),
            todoList
        });
    };

    render() {
        return (
            <>
            <div className="App">
                <TaskAdder addTask={this.handleAddTask} />
                <TodoList taskList={this.state.todoList} type="todoList" doneTask={this.handleDoneTask} removeTask={this.handleRemoveTask} />
                <TodoList taskList={this.state.doneList} type="doneList" doneTask={null} removeTask={this.handleRemoveTask} />
            </div>
                <footer className="Footer"><span>by Maciej Świechowicz</span></footer>
            </>
        );
    }
}

export default TodoApp;