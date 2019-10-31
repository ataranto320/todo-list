import React from 'react';
import TodoList from './TodoList/todoList';
import AddTodo from './AddTodo/addTodo';

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
      <TodoList updatedTodoFn={this.updateTodo} todos={this.state.todos}></TodoList>
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

  updateTodo = async (todo) => {
    const newTodos = this.state.todos.map(_todo => {
      if(todo === _todo)
      return {
        text: todo.text,
        completed: !todo.completed
      }
      else 
      return _todo
    });
    await this.setState({ todos: newTodos });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }
}

export default App;
