import React from 'react';
import TodoList from './components/TodoList';
import Context from './context';

function App() {

  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, text: "Купить арбуз"},
    {id: 2, completed: false, text: "Купить кефир"},
    {id: 3, completed: false, text: "Купить яйца"}
  ]);

  const style = {
    padding: "20vh 30vw"
  };

  function toggleReadiness(id){
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    )
    
  }

  function removeTodo(id) {
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }

  return (
    <Context.Provider value={{todos, setTodos, removeTodo, toggleReadiness}}>
      <div style={style}>
        <h1>TODO list by mobynickkk</h1>
        <TodoList />
      </div>
    </Context.Provider>
  );
}

export default App;
