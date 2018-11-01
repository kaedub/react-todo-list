import React, { Component } from 'react';


class EditForm extends Component {
    constructor(props) {
        super(props);

        this.state = {text: this.props.text};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({[evt.target.name]: evt.target.value});
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.hideForm();
        this.props.handleEdit(this.props.id, this.state.text);
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="text" onChange={this.handleChange} value={this.state.text}></input>
                <button>Save</button>
            </form>
        )
    }
}

export default EditForm;