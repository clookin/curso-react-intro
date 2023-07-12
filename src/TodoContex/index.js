import React from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,  
    } = useLocalStorage('TODOS_V1', []);
    const [SearchValue, setSearchValue] = React.useState('');
    const [OpenModal, setOpenModal] = React.useState(false)
    
    const completedTodos = todos.filter(
        sunc => !!sunc.completed).length;
    const totalTodos = todos.length;
    const searchedTodos = todos.filter(
        todo => {
        const todoTextLow = todo.text.toLowerCase();
        const searchTextLow = SearchValue.toLocaleLowerCase();
        return todoTextLow.includes(searchTextLow.toLowerCase())
        }
    );
    
        const todoFinished = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text == text
        );
    
    // aqui se uso la linea de abajo para poder marcar o desmarcar
    // la Tarea de la pagina, al tener valores de true / false se 
    // puede utilizar la primera como verdadera y en la siguiente
    // negar la condicion para que se entienda que esta en false.
    
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
        };
        const todoDelete = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text == text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };
        const addTodo = (text) => {
            const newTodos = [...todos];
            newTodos.push({
                text,
                completed: false,
            })
            saveTodos(newTodos);
        };
    
    return (
    <TodoContext.Provider value={{
    completedTodos,
    totalTodos,
    SearchValue,
    setSearchValue,
    searchedTodos,
    todoFinished,
    todoDelete,
    loading,
    error,    
    OpenModal,
    setOpenModal,
    addTodo,
    }}>
    {children}
    </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };