import React from 'react';
import TodoList from './components/TodoList';

function App() {

  const todos = {

  }

  const style = {
    padding: "20vh 30vw"
  }

  return (
    <div style={style}>
      <h1>TODO list by mobynickkk</h1>
      <TodoList />
    </div>
  );
}

export default App;
