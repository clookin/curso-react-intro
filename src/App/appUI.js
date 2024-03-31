import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import React from 'react';
import { Modal } from '../Modal';
import {TodoForm} from '../TodoForm'
import { TodoContext } from '../TodoContex';









function AppUI() {
    const {
        searchedTodos,
        todoFinished,
        todoDelete,
        loading,
        error,
        OpenModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (

        <React.Fragment>
    
        <TodoCounter />
        <TodoSearch/>
        <TodoList>
            {loading && <TodosLoading/>}
            {error && <TodosError/>}
            {(!loading && searchedTodos.length ==0) && <EmptyTodos/>}
    
            {searchedTodos.map(sunc => (
            <TodoItem key={sunc.text}
            text={sunc.text} 
            completed={sunc.completed} 
            onComplete={() => todoFinished(sunc.text)}
            onDelete={() => todoDelete(sunc.text)}
            />
        ))}
        </TodoList>
        
        <CreateTodoButton setOpenModal={setOpenModal}/>
            {OpenModal && (
                
            <Modal>
                <TodoForm/>
            </Modal>
            )

            }
    
        </React.Fragment>
    );
    
}

export { AppUI };