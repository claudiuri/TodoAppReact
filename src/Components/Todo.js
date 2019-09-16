import React, { Component}  from 'react';
import TodoList from './TodoList';
import './Todo.css'

export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            todo: "",
            todos: []
        }
    }
  

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ todos: [this.state.todo, ...this.state.todos]})
    }


   handleChange = e => {
       this.setState({ todo: e.target.value})
   }

    render() {

        return (
            <div className="main">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        name="todo" 
                        placeholder="Todo"
                        type="text"
                        onChange={this.handleChange} 
                    />
                    
                    <button type="submit" >Add</button>
                </form>
                <TodoList todos={this.state.todos} />
            </div>
           
        );
    }
}
