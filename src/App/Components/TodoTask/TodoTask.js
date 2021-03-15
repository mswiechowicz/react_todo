import React, {Component} from 'react';
import './TodoTask.css';

class TodoTask extends Component
{
    render() {
        const {task_priority: priority, task_name: name, task_deadline: deadline, type, id, removeTask, doneTask, task_done} = this.props;
        // const taskProps = { task_priority: priority, task_name: name, task_deadline: deadline};
        const color = priority ? "red" : "white";
        return (
                <li className="TodoTask">
                    <strong style={{color:color}}> {name} </strong> <span style={{margin: "5px"}}>-</span>
                    {type === "todoList"
                        ? <span> deadline: {deadline}</span>
                        : <span> deadline was: {deadline} <br/>done: {task_done} </span>
                    }
                    {type === "todoList" && (
                        <button className={"TodoTask__done"} onClick={() => doneTask(id)}>Done</button>
                    )}
                    <button className={"TodoTask__remove"} onClick={() => removeTask(id, type)}>X</button>
                </li>
        );
    }
}

export default TodoTask;