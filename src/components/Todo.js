import React from 'react';


export default function Todo(props) {

    const styles = {
        div: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: ".5rem 1rem",
            border: "1px solid #ccc",
            borderRadius: "15px",
            margin: "1vh 0"
        },
        li: {
            listStyleType: "none"
        },
        button: {
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "10000px"
        }
    }

    return (
        <div style={styles.div}>
            <input type="checkbox" />
            <li style={styles.li}><strong>{props.id}</strong> {props.text}</li>
            <button style={styles.button}>&times;</button>
        </div>
    );
}