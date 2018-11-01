import React, { Component } from 'react';


class Todo extends Component {

    render() {
        return <li>
            <span>{this.text}</span>
            <button onClick={() => this.props.handleDelete(this.props.id)}>X</button>
        </li>
    }
}

export default Todo;