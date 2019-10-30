import React from 'react';
import TodoList from './todoList';
import TodoItem from './todoItem';
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {

  constructor() {
    //parents constructor
    super();
    //object
    this.state = {
      //array
      todos: []
    };
  }

  redner() {
    return (
    <div>
      <TodoList></TodoList>
      <TodoItem></TodoItem>
    </div>
    );
  }

  //local storage function
  // put into DOM
  componenetDidMount = () => {
    const todos = localStorage.getItem('todos');
    if(todos) {
      console.log('has todos', todos);
    } else {
      console.log('no todos');
    }
  }

}

export default App;
