import React from 'react';
import TodoApp from '../components/TodoApp';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/">Cerrar Sesion</a>
          </li>
        </ul>
      </nav>

      <TodoApp />
    </div>
  );
}

export default App;
