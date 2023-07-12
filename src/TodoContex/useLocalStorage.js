import React from "react";


function useLocalStorage (itemName, initialValue) {

  const [item , setItem] = React.useState(initialValue);
  const [loading , setLoading] = React.useState(true);
  const [error , setError] = React.useState(false);



    // Las funciones siguientes son para dar uso al localStorage
  // primero se crea la funcion que va a conectar al localS
  // despues se hizo una variable parsed que es la que se encarga\
  // de traducir el string de datos en la terminal del navegador
  // a codigo, luego se usa el condicional if para agregar un 
  // array vacio si no se tiene informacion incial, tener en cuenta 
  // que en el localS se agrega a TODOS_V1 un array con la utilidad
  // de json stringify para que lo reconozca como string.
  // Si en el localS hay info, mandamos llamar a localStodos con la 
  // utilidad de Json.parse que se encarga de traducir el String 
  // que se crea si hay datos en la variable de localSTodos
      

  React.useEffect(() =>{
    setTimeout (()=>{
      try{
        const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
    
      if (!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue)); 
          parsedItem = initialValue;
      } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
      }
    
      setLoading(false);
    } catch(error){
      setLoading(false);
      setError(true);
    }
},2000);
  }, []);

  
  // parsedTodos va a ser la funcion para pasar datos del localS
  // al codigo, por ende en el useState que da informacion a los 
  // todos se agrega y asi es como se comunican 


    // esta funcion se usa para actualizar el estado de las tareas
    // gracias a esta se puede eliminar de la lista de Todos
    // porque se actualizan cuando se usan en la pagina 
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }
  return {item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };