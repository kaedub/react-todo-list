import React, { Component } from 'react';


class TodoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {text: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({[evt.target.name]: evt.target.value});
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.handleAdd(this.state);
        this.setState(); // clear form field
    }
    
    render() {
        return <form onSubmit={this.handleSubmit}>
            <label htmlFor="text"></label>
            <input id="text" name="text" onChange={this.handleChange} value={this.state.text}></input>
            <button>Add New Todo</button>
        </form>
    }
}

export default TodoForm;