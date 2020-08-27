import React, {useContext} from 'react';
import Todo from './Todo';
import Context from '../context';


export default function TodoList() {
    const buttonStyle = {
        width: "100%",
        height: "10vh",
        border: "1px solid #gray",
        borderRadius: "15px",
        background: "white",
        fontSize: "3rem"
    }

    const {todos, setTodos, last} = useContext(Context);

    return (
        <ul>
            {
                todos.map((todo, i) => {
                    return <Todo key={todo.id} todo={todo} index={i} />  
                })
            }
            <button onClick={() => {
                setTodos(
                    todos.concat({id: Date.now(), completed: false, text: "Введите что надо купить"})
                )
            }} style={buttonStyle}>+</button>
        </ul>
    );
}