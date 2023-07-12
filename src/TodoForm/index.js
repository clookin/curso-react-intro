import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContex';

function TodoForm() {
    const {
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = 
    React.useState('')

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo (newTodoValue)
        setOpenModal(false);
    }
    const onCancel = () => {
        setOpenModal(false);
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    return(
        <form onSubmit={onSubmit} >
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder="Enviar documentos pendientes"
            value={newTodoValue}
            onChange={onChange}
            />
            <div className='TodoForm-ButtonContainer'>
            <button
            type='button'
            className='TodoForm-Button
            TodoForm-Button--cancel'
            onClick={onCancel}>Cancelar</button>
            <button className='TodoForm-Button
            TodoForm-Button--add'>Agregar</button>
            </div>
        </form>

    )
}

export { TodoForm };