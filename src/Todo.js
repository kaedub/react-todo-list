import React, { Component } from 'react';
import EditForm from './EditForm';


class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {edit: false};

        this.showEditForm = this.showEditForm.bind(this);
        this.hideEditForm = this.hideEditForm.bind(this);
    }

    showEditForm() {
        this.setState({edit: true});
    }

    hideEditForm() {
        this.setState({edit: false});
    }

    render() {
        return <li>
            <span>{this.props.text}</span>
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