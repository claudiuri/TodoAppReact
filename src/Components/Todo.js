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
        this.setState({ todos: [this.state.todo, ...this.state.todos], todo: ""})
    }


   handleChange = e => {
       this.setState({ todo: e.target.value})
   }

    render() {

        return (
            <div className="main">
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            name="todo" 
                            placeholder="Todo"
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.todo} 
                        />
                        
                        <button type="submit" >Add</button>
                    </form>
                </div>
               
                <div className="list">
                    <TodoList todos={this.state.todos} />
                </div>
            </div>
           
        );
    }
}
