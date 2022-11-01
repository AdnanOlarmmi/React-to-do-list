/* eslint-disable */
import TodoItem from "./TodoItem";

const TodoList = (props) => {
        return (
            <ul>
        {props.todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} 
          handleChangeProps={props.handleChangeProps} delTodoProps={props.delTodoProps}
          />
        ))}
      </ul>
        )
}

export default TodoList;