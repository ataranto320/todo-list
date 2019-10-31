import React from 'react';
import './style.css';

class TodoItem extends React.Component {

    render() {

        const {todo} = this.props;

        return(
            <div className={"todoItem" + (this.todo.completed ? " completed" : "")} onClick={this.toggleTodo}>{todo.text}</div>
        );
    }
    
    //toggle if todo is completed or not
    toggleTodo = () => {
        this.props.updateTodoFn(this.props.todo);
    }

}

export default TodoItem;