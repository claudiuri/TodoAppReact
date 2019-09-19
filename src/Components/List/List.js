import React from 'react';
import './List.css'

export default function List (props){
   
    return (
        <div className="list">
            <ul>
                {
                    props.todos.map((item, index) => ( <li onClick={() => props.onTodoClick(index)} className="todo" key={index}>{item} </li>))
                }
            </ul>
        </div>
    );
}