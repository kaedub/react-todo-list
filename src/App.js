import React, { Component } from 'react';
import TodoList from './TodoList';
// import './App.css';

/*

TodoList
s - todos []

Todo
p - handleDelete
p - id
p - text
key

TodoForm
s - text (form field)
p - handleAdd

*/


class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
