import React, { Component}  from 'react';
import List from '../List/List';
import Header from '../Header/Header';
import Form from '../Form/Form';
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

    handleTodoClick = todoIndex => {
        let { todos } = this.state;
        todos = todos.filter((item, index) => { return index !== todoIndex });
        this.setState({ todos });
    }

    render() {
        const { newTodo, todos } = this.state;

        return (
            <div className="main">
                <Header/>
                <Form todo={newTodo} onFormChange={this.handleFormChange} onFormSubmit={this.handleFormSubmit}/>
                <List todos={todos} onTodoClick={this.handleTodoClick}/>
            </div>
           
        );
    }
}
