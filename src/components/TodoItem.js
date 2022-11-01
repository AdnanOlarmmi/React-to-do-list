/* eslint-disable */

const TodoItem = (props) => {

    const {id, title, completed} = props.todo;
    return(<div onDoubleClick={this.handleEditing}>
        <li className="item">
        <input 
        type="checkbox" 
        checked={completed}
        onChange={() => props.handleChangeProps(id)}className="checkbox"></input>
        <button onClick={() => props.delTodoProps(id)}>Delete</button>
        <span className={completed?"completed-style":null}>
        {title}
        </span>
        </li>
        </div>)
}

export default TodoItem;