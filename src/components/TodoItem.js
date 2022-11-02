/* eslint-disable */
import React, { useState, useEffect } from "react"

const TodoItem = props => {

     const [editing, setEditing] = useState(false);

   

    const handleEditing = () => {
        setEditing(true)
    }

    const handleUpdatedDone = e => {
        if(e.key === "Enter") {
            setEditing(false)
        }
    }

        const {id, title, completed} = props.todo;

        let viewMode = {}
        let editMode = {}

        if (editing) {
            viewMode.display = "none"
        } else {
            editMode.display = "none"
        }
    
  return(
        <li className="item">
        <div onDoubleClick={handleEditing} style={viewMode}>
        <input 
        type="checkbox" 
        checked={completed}
        onChange={() => props.handleChangeProps(id)}className="checkbox"></input>
        <button onClick={() =>props.delTodoProps(id)}>Delete</button>
        <span className={completed?"completed-style":null}>
        {title}
        </span>
        </div>
        <input type="text" className="textInput" style={editMode} value={title} onChange={e => {
            props.setUpdateProps(e.target.value, id)
        }} onKeyDown={handleUpdatedDone}/>
        </li>
        )
      
}

export default TodoItem;