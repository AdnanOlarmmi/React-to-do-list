/* eslint-disable */
import React from "react"

class TodoItem extends React.Component {

     state = {
        editing: false,
    }  

   

    handleEditing = () => {
        this.setState({
            editing: true,
        })
    }

    handleUpdatedDone = e => {
        if(e.key === "Enter") {
            this.setState({
                editing: false
            })
        }
    }

    render() {
        const {id, title, completed} = this.props.todo;

        let viewMode = {}
        let editMode = {}

        if (this.state.editing) {
            viewMode.display = "none"
        } else {
            editMode.display = "none"
        }
        
    
  return(
        <li className="item">
        <div onDoubleClick={this.handleEditing} style={viewMode}>
        <input 
        type="checkbox" 
        checked={completed}
        onChange={() => this.props.handleChangeProps(id)}className="checkbox"></input>
        <button onClick={() => this.props.delTodoProps(id)}>Delete</button>
        <span className={completed?"completed-style":null}>
        {title}
        </span>
        </div>
        <input type="text" className="textInput" style={editMode} value={title} onChange={e => {
            this.props.setUpdateProps(e.target.value, id)
        }} onKeyDown={this.handleUpdatedDone}/>
        </li>
        )
    }
  
}

export default TodoItem;