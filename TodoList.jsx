import React from "react";
import { useState } from "react";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todoName, setTodosName] = useState("");
  const addHandler = (e) => {
    if (todoName !== "") {
      setTodos([
        ...todos,
        { id: todos.length + 1, name: todoName, completed: false},
      ]);
      setTodosName("");
    }
  };
  const completeTodo = (id) => {
    // console.log("clicked");
    
   let ans=[...todos].map(res => {
      if (id == res.id) {
        return {...res, completed: !res.completed };
      }
      return res;
    });
   setTodos(ans);
  };
  const deleteHandler = (TodoId) => {
    setTodos(todos.filter((t) => t.id !== TodoId));
  };

  return (
    <>
      {/* {JSON.stringify(todos)} */}
      <h1>welcome</h1>
      <input
        name="todoName"
        onChange={(e) => setTodosName(e.target.value)}
        value={todoName}
      />
      <button onClick={addHandler}> Add </button>
      <br />
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span onClick={() => completeTodo(todo.id)}>
                {todo.completed ? (
                  <strike>{todo.name}</strike>
                ) : (
                  <>{todo.name}</>
                )}
              </span>
              &nbsp;
              <button onClick={() => deleteHandler(todo.id)}> X </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default TodoList;
