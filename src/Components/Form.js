import React, { Component}  from 'react';
import './Form.css'

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state = { }
    }
  

    handleSubmit = e => {
        e.preventDefault();
        this.props.onFormSubmit()
    }


    handleChange = e => {
        this.props.onFormChange(e.target.value);
    }

    render() {

        return (
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        name="todo" 
                        placeholder="Todo"
                        type="text"
                        onChange={this.handleChange}
                        value={this.props.todo} 
                    />
                    
                    <button type="submit" >Add</button>
                </form>
            </div>
           
        );
    }
}
