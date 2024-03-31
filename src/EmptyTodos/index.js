import React from 'react'
import './EmptyTodos.css';


function EmptyTodos () {
    return(
        <div className='EmptyContainer'>
        <p>No tienes tareas pendientes</p>
        </div>
    );
}
export { EmptyTodos }