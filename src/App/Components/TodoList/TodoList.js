import React, {Component} from 'react';
import "./TodoList.css";
import TodoTask from "../TodoTask/TodoTask";
class TodoList extends Component
{
    sortListAlphabetically = list => {
        return list.sort((a, b) => {
            const a_name = a.task_name.toUpperCase();
            const b_name = b.task_name.toUpperCase();
            return a_name.localeCompare(b_name)
        })
    };

    sortListByDate = list => {
        return list.sort().reverse();
    };

    render() {
        const { doneTask, removeTask, type } = this.props;
        let { taskList } = this.props;
        taskList = this.sortListAlphabetically(taskList);
        // taskList = type === "todoList" ? this.sortListAlphabetically(taskList) : this.sortListByDate(taskList);
        const taskListToShow = taskList.map((task,id) => (
            <TodoTask key={id} {...task} id={id} type={type} doneTask={doneTask} removeTask={removeTask}/>)
        );
        return (
            <div className="TodoList">
                <p> {type === "todoList" ? "To do" : "Done" } ({taskList.length}): </p>
                <ul className="TodoList__ul">
                    {taskListToShow}
                </ul>
            </div>
        );
    }
}

export default TodoList;