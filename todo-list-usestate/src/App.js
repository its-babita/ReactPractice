import React, { useState } from "react";
import "./App.css";
import { FaTrash } from "@react-icons/all-files/fa/FaTrash";

const App = () => {
  return (
    <div className="container">
      <Todos />
    </div>
  );
};

function Todos() {
  const AppTitle = "TodoApp";
  const [todoList, setTodoList] = useState(["Buy a pen ", "Buy a Book"]);

  const clearAll=()=>{
    setTodoList([])
  }

  const onAddTodo = (todo) => {
    setTodoList((prev) => [todo, ...prev]);
  };

  return (
    <div className="todo-card">
      <TodoTitle title={AppTitle} />
      <AddTodo addTodo={onAddTodo} />
      <TodoList todos={todoList} setTd={setTodoList} />
      <TodoFooter clearAll={clearAll} />
    </div>
  );
}

function TodoTitle(props) {
  return <div className="todo-card titile">{props.title}</div>;
}

function AddTodo({ addTodo }) {
  const [todo, setTodo] = useState("");

  const handleTodo = (event) => {
    const todoValue = event.target.value;
    setTodo((_) => todoValue);
  };

  const TodoAdd = () => {
    addTodo(todo);
    setTodo((_) => "");
  };

  return (
    <div className="todo-card add-todo">
      <input
        placeholder="Add your new Todo"
        onChange={handleTodo}
        value={todo}
      />
      <button className="btn-1" onClick={TodoAdd}>
        +
      </button>
    </div>
  );
}

function TodoList({ todos,setTd }) {
  console.log(todos);
  const deleteItem = (index) => {
    const newTodos=todos.filter((value,idx)=>{
      if(idx===index){
        return false
      }
      return true
    })
    //console.log(newTodos);
    setTd(newTodos)
  };
  return (
    <>
      <div className="todo-card todo-list">
       {todos.map((value, index) =>           
            <div key={index}>
              {value}{" "}
              <FaTrash
                onClick={() => deleteItem(index)}
                color="red"
                size="15px"
                style={{ marginLeft: "10px" }}
              />
            </div>         
           )}
      </div>
    </>
  );
}

function TodoFooter({clearAll}) {
    return (
    <div className="todo-card todo-footer">
      <div className="todo-card pending-tasks">
        <button className="btn-2" onClick={clearAll}>Clear All</button>
      </div>
    </div>
  );
}

export default App;
