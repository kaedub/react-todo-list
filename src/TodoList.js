import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo'
import uuid from 'uuid/v4';
import './TodoList.css';



class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {todos: JSON.parse(localStorage.getItem('todos')) || []};
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleAdd(todo) {
        console.log(JSON.parse(localStorage.getItem('todos')));

        let addTodo = {...todo, id: uuid(), isCompleted: false}
        this.setState(st => ({
            todos: [...st.todos, addTodo]
        }), function() {
            localStorage.setItem("todos", JSON.stringify(this.state.todos));
        });
    }

    handleDelete(id) {
        this.setState(st => ({
            todos: st.todos.filter(t => t.id !== id)
        }), function() {
            localStorage.setItem("todos", JSON.stringify(this.state.todos));
        });
    }

    // this will change the state to edit the item
    handleEdit(id, text) {
        let updatedTodos = this.state.todos.map(st => {
            if (st.id === id) {
                st.text = text;
            }
            return st;
        });

        this.setState({todos: updatedTodos}, function() {
            localStorage.setItem("todos", JSON.stringify(this.state.todos));
        });
    }

    render() {
        let todos = this.state.todos.map(todo => {
            return <Todo 
                handleDelete={this.handleDelete} 
                text={todo.text} 
                key={todo.id} 
                id={todo.id}
                isCompleted={todo.isCompleted}
                handleEdit={this.handleEdit}/>
        });
        return (
            <div id="TodoList">
                <TodoForm handleAdd={this.handleAdd} />
                <ul>{todos}</ul>
            </div>
        );
    }
}

export default TodoList;