import React, {useContext} from 'react';
import Todo from './Todo';


export default function TodoList() {
    const buttonStyle = {
        width: "100%",
        height: "10vh",
        border: "1px solid #gray",
        borderRadius: "15px"
    }

    

    return (
        <ul>
            <Todo id="1" text="Купить арбуз" />
            <button style={buttonStyle}>+</button>
        </ul>
    );
}