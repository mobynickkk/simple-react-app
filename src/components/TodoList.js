import React from 'react';


export default function TodoList() {
    const buttonStyle = {
        width: "100%",
        height: "10vh",
        border: "1px solid #gray",
        borderRadius: "15px"
      }

    return (
        <ul>
            
            <button style={buttonStyle}>+</button>
        </ul>
    );
}