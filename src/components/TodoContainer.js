/*eslint-disable */
import { v4 as uuidv4 } from "uuid"
import React, { useEffect, Fragment, useState } from "react";
import TodoList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";


const TodoContainer = () => {

   const [todos, setTodos] = useState(getInitialTodos());

       const handleChange = (id) => {
        setTodos(prevState => 
             prevState.map(todo => {
                if(todo.id===id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                    
                }
                return todo;
            })
        )
       }

       const delTodo = id => {
        setTodos(
            [
                ...todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        )
       }

       const addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
          };
          setTodos(
             [...todos, newTodo]
          );
       }

       const setUpdate = (updatedTitle, id) => {
        setTodos(
             todos.map(todo => {
              if (todo.id === id) {
                todo.title = updatedTitle
              }
              return todo
            }),
          )
       }

      
       function getInitialTodos() {
        // getting stored items
        const temp = localStorage.getItem("todos")
        const savedTodos = JSON.parse(temp)
        return savedTodos || []
      }

      useEffect(() => {
        // storing todos items
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
      }, [todos])
      
        return (
            <Fragment>
            <Header />
            <a href="/about">click</a>
            <InputTodo addTodoProps={addTodoItem}/>
            <TodoList todos={todos} handleChangeProps={handleChange} delTodoProps={delTodo} setUpdateProps={setUpdate} />
            </Fragment>
        );
}

export default TodoContainer;