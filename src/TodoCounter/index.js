import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContex';

function TodoCounter () {
    const {
        completedTodos,
    totalTodos,
    } = React.useContext(TodoContext)
    
    return (
        //     // este es un operador terniario funciona con los parametros
        //     // para comparar, en este caso total y completed, 
        //     // la sintaxis de ? da paso a dos opciones verdadera : falsa
        //     // si se cumplen o no los requisitos envia la primera o la segunda
        // totalTodos === completedTodos ?
        // <h1 className="TodoCounter"> Muy bien, completaste todas tus tareas</h1>
        // :
        // <h1 className="TodoCounter">
        //     Completaste <span>{completedTodos}</span> de <span>{totalTodos}</span> Tareas
        // </h1>
        <h1 className="TodoCounter">
            {
                totalTodos === 0
                ? 'no hay tareas disponibles' 
                : totalTodos === completedTodos
                    ? 'Muy bien, completaste todas tus tareas'
                    : (
                        <span>
                        Completaste <span className='highLight'>{completedTodos}</span> de <span className='highLight'>{totalTodos}</span> Tareas
                        </span>
                    )
            }
        </h1>
    );
}  
export { TodoCounter };

