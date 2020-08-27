import React from 'react';
import TodoList from './components/TodoList';

function App() {

  const todos = {

  }

  const style = {
    padding: "30vw 20vh",
    fontFamily: "Roboto"
  }

  return (
    <div style={style}>
      <h1>TODO list by mobynickkk</h1>
      <TodoList />
    </div>
  );
}

export default App;
