import React from 'react'
import './EmptyTodos.css';


function EmptyTodos () {
    return(
        <div className='EmptyContainer'>
        <p>no tienes tareas pendientes</p>
        </div>
    );
}
export { EmptyTodos }