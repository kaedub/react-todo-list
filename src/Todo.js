import React, { Component } from 'react';
import EditForm from './EditForm';
import './Todo.css'


class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {edit: false};

        this.showEditForm = this.showEditForm.bind(this);
        this.hideEditForm = this.hideEditForm.bind(this);
        // this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    showEditForm() {
        this.setState({edit: true});
    }

    hideEditForm() {
        this.setState({edit: false});
    }

    // handleCheckbox() {
    //     this.setState({isCompleted: !this.state.isCompleted});
    // }

    render() {
        return <li>
            <span className={(this.props.isCompleted ? "completed" : "pending")}>{this.props.text}</span>
            <input type="checkbox" checked={this.props.isCompleted} onChange={() => this.props.handleCheckbox(this.props.id)}></input>
            <button onClick={() => this.props.handleDelete(this.props.id)}>X</button>
            <button onClick={() => this.showEditForm(this.props.id)}>Edit</button>
            {this.state.edit ? <EditForm 
                handleEdit={this.props.handleEdit} 
                hideForm={this.hideEditForm} 
                id={this.props.id} 
                text={this.props.text}/>: ""}
        </li>
    }
}

export default Todo;