import React, { useContext } from 'react';
import Context from '../context';

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
        listStyleType: "none",
        flex: "1",
        marginLeft: ".2rem",
        outline: "none"
    },
    button: {
        background: "red",
        color: "white",
        border: "none",
        borderRadius: "10000px"
    }
}

export default function Todo({todo, index}) {

    const { toggleReadiness, removeTodo } = useContext(Context);

    const classes = [];

    if (todo.completed) {
        classes.push("done");
    }

    const id = todo.id;

    return (
        <div style={styles.div}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleReadiness(todo.id)} />
            <strong style={{marginLeft: "1rem"}}>{index+1 }&nbsp;</strong>
            <li contentEditable="true" className={classes.join(" ")} style={styles.li}>
                {todo.text}
            </li>
            <button onClick={() => removeTodo(todo.id)} style={styles.button}>&times;</button>
        </div>
    );
}