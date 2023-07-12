import React from 'react';
import { AppUI } from './appUI';
import { TodoProvider } from '../TodoContex';

function App() {
  
  
  return (
    <TodoProvider>
        <AppUI/>
    </TodoProvider>
      )
}
export default App;
