import React from 'react';

class AddTodo extends React.Component {

    render() {
        return(
            <div className="addTodoContainer">
                <form>
                    <input onChange={(e) => this.updateInput(e)} type="text"></input>
                </form>
            </div>
        );
    }

    updateInput = (e) => {

    }

}

export default AddTodo;