import React from 'react';

class AddTodo extends React.Component {

    render() {
        return(
            <div className="addTodoContainer">
                <form onSubmit={(e) => this.submitTodo(e)}>
                    <input onChange={(e) => this.updateInput(e)} type="text"></input>
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        );
    }

    updateInput = (e) => {
        console.log(e);
    }
    //function to submit form
    submitTodo = (e) => {
        e.preventDefault();
        console.log("submit");
    }

}

export default AddTodo;