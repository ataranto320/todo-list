import React from 'react';
import TodoList from './todoList';
import TodoItem from './todoItem';
import AddTodo from './addTodo';
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
      <AddTodo></AddTodo>
    </div>
    );
  }

  //local storage function
  // put into DOM
  componenetDidMount = () => {
    const todos = localStorage.getItem('todos');
    if(todos) {
      const savedTodos = JSON.parse(todos);
      //update state - pass object
      this.setState({ todos: savedTodos });
    } else {
      console.log('no todos');
    }
  }

  //function to add items to todos
  addTodo = (todo) => this.setState({ todos: [...this.state.todos, todo] })

}

export default App;
