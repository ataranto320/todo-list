import React from 'react';
import TodoList from './todoList';
// import TodoItem from './todoItem';
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
      <TodoList todos={this.state.todos}></TodoList>
      <TodoItem></TodoItem>
      <AddTodo addTodoFn={this.addTodo}></AddTodo>
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
  addTodo = async (todo) => {
     await this.setState({ todos: [...this.state.todos, {
      text: todo,
      completed: false
     }] });
     localStorage.setItem("todos", JSON.stringify(this.state.todos))
     console.log(localStorage.getItem("todos"));
  }

  updateTodo = (todo) => {
    const newTodos = this.state.todos.map(_todo => {
      if(todo === _todo)
      return {
        text: todo.text,
        completed: !todo.completed
      }
      else 
      return _todo
    });
    console.log(newTodos);
  }
}

export default App;
