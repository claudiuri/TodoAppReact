import React from 'react';
import './TodoList.css'

export default function TodoList(props) {
    
    return (
        <div className="list">
             <ul>
                {
                    props.todos.map((item, index) => ( <li key={index}>{item}</li>))
                }
            </ul>
        </div>
           
    )
}