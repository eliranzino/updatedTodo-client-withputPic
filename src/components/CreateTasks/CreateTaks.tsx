import React, { FormEvent } from 'react';
import { connect } from 'react-redux';
import { createTodosAction } from '../../actions';
import "bootstrap/dist/css/bootstrap.min.css"
import { Button } from 'react-bootstrap';

interface CreateTasksProps {
    createTask(Description: string, date: string): void;
}

interface CreateTasksState {
    Description: string;
    date: string;
}

class _CreateTasks extends React.Component<CreateTasksProps, CreateTasksState> {
    state: CreateTasksState = {
        Description: '',
        date: '',
    }
    render() {
        const { Description, date } = this.state;

        return (
            <div>
                <form onSubmit={this.onSubmit} >
                    <h4>Add a task:</h4>
                    <textarea value={Description} onChange={this.handleInputChange} required name="Description"
                        placeholder="Write here your task..."></textarea>
                    <br />
                    <input value={date} onChange={this.handleInputChange} name="date" type="date" />
                    <br />
                    <Button type="submit" >SAVE</Button>
                    <br/>
                </form>
            </div>
        )
    }

    handleInputChange = (e: any) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value,
        } as any);
    }

    onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const { Description, date } = this.state;
        const { createTask } = this.props;
        console.log(Description, date)
        createTask(Description, date);
    }
}
const mapDispatchToProps = {
    createTask: createTodosAction,
}

export const CreateTasks = connect(null, mapDispatchToProps)(_CreateTasks);