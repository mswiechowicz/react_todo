import React, {Component} from 'react';
import './TaskAdder.css';

class TaskAdder extends Component
{
    state = {
        task: {
            task_name: '',
            task_deadline: '',
            task_priority: false,
        },
        validate_error: false
    };

    handleSubmit = e => {
        e.preventDefault();
        if(this.validate()){
            this.props.addTask(this.state.task);
            this.setState({
                task: {
                    task_name: '',
                    task_deadline: '',
                    task_priority: false,
                },
                validate_error: false
            });
            return true;
        }
        this.setState({ validate_error: true});
    };

    validate = () => {
        const {task_name: name, task_deadline: deadline} = this.state.task;
        return name.length > 0 && deadline;
    };

    handleChange = e => {
        const { name, type, value, checked } = e.target;
        const val = type === "checkbox" ? checked : value;
        this.setState(prevState => ({ task: { ...prevState.task, [name]: val }}))
    };

    render() {
        const {task_name: name, task_deadline: deadline, task_priority: priority} = this.state.task;
        return (
            <div className="TaskAdder">
                <form className="TaskAdder__form" onSubmit={this.handleSubmit}>
                    <div className="TaskAdder__group">
                        <input
                            type="text"
                            name="task_name"
                            value={name}
                            onChange={this.handleChange}
                            placeholder="add new task"/>
                        <label>
                            <input
                                type="checkbox"
                                name="task_priority"
                                checked={priority}
                                onChange={this.handleChange}
                            />
                            High priority
                        </label>
                    </div>
                    <label>Deadline:
                        <input
                            type="date"
                            name="task_deadline"
                            value={deadline}
                            onChange={this.handleChange}
                            min={(new Date()).toISOString().split('T')[0]}
                            max="2021-12-31"/>
                    </label>
                    {this.state.validate_error && <span style={{color:"red"}}> Task name or deadline must be filled!</span>}
                    <button>Add task</button>
                </form>
            </div>
        );
    }
}

export default TaskAdder;