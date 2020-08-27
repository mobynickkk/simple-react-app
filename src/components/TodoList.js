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

    const {todos, setTodos} = useContext(Context);

    return (
        <ul>
            {
                todos.map(todo => {
                    return <Todo key={todo.id} todo={todo} />  
                })
            }
            <button style={buttonStyle}>+</button>
        </ul>
    );
}