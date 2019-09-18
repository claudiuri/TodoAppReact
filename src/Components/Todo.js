import React, { Component}  from 'react';
import TodoList from './TodoList';
import Header from './Header';
import Form from './Form';
import './Todo.css'

export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            newTodo: "",
            todos: []
        }
    }

    handleFormSubmit = () => {
        this.setState({ todos: [...this.state.todos, this.state.newTodo], newTodo: ""})
    }

    handleFormChange = todo => {
        this.setState({ newTodo: todo})
    }

    render() {
        const { newTodo, todos } = this.state;

        return (
            <div className="main">
                <Header/>
                <Form todo={newTodo} onFormChange={this.handleFormChange} onFormSubmit={this.handleFormSubmit}/>
                <TodoList todos={todos} />
            </div>
           
        );
    }
}
