import React from 'react'
import './TodoSearch.css';
import { TodoContext } from '../TodoContex';


function TodoSearch (){
    const{
        SearchValue,
        setSearchValue,
    } = React.useContext(TodoContext);


    return(
        <input placeholder="Buscar tarea" 
        className="TodoSearch"
        value={SearchValue}
        onChange={(event) => {
            console.log('pepegrila');
            setSearchValue(event.target.value);
        }}/>
    );
}
export { TodoSearch }