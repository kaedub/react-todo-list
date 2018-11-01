import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo'
import uuid from 'uuid/v4';



class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {todos: []};
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleAdd(todo) {
        console.log('Adding todo', todo);
        let addTodo = {...todo, id: uuid()}
        this.setState(st => ({
            todos: [...st.todos, addTodo]
        }));
    }

    handleDelete(id) {
        console.log("Delete item", id);
    }

    render() {
        let todos = this.state.todos.map(todo => <Todo handleDelete={todo.handleDelete} text={todo.text} />);
        return <div>
            <TodoForm handleAdd={this.handleAdd} />
            <ul>{todos}</ul>
        </div>
    }
}

export default TodoList;