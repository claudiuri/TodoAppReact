import React from 'react';

export default function TodoList(props) {
    
    return (
            <ul>
                {
                    props.todos.map((item, index) => ( <li key={index}>{item}</li>))
                }
            </ul>
    )
}