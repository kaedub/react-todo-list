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
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleAdd(todo) {
        let addTodo = {...todo, id: uuid()}
        this.setState(st => ({
            todos: [...st.todos, addTodo]
        }));
    }

    handleDelete(id) {
        this.setState(st => ({
            todos: st.todos.filter(t => t.id !== id)
        }));
    }

    // this will change the state to edit the item
    handleEdit(id, text) {
        // update state based on id

        // search array for element where id's are equal

        // update state with that item

        let updatedTodos = this.state.todos.map(st => {
            if (st.id === id) {
                st.text = text;
            }
            return st;
        });
        this.setState({todos: updatedTodos});
    }

    render() {
        let todos = this.state.todos.map(todo => {
            return <Todo 
                handleDelete={this.handleDelete} 
                text={todo.text} 
                key={todo.id} 
                id={todo.id}
                handleEdit={this.handleEdit}/>
        });
        return <div>
            <TodoForm handleAdd={this.handleAdd} />
            <ul>{todos}</ul>
        </div>
    }
}

export default TodoList;