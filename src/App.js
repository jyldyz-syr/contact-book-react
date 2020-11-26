import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import EditModal from "./components/EditModal/EditModal";
import React, { useState } from "react";

function App() {
  let [todos, setTodos] = useState([]);
  let [modal, setModal] = useState(false);
  let [editTodo, setEditTodo] = useState({}); 

  function handleTask(todo) {
    let newTodos = [...todos];
    newTodos.push(todo);
    setTodos(newTodos);
  }
  function handleDelete(id) {
    let newTodos = [...todos];
    let newTodos2 = newTodos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos2);
  }


  function handleEdit(index) {
    setModal(true);
    setEditTodo(todos[index]);
  }

  function handleSaveTask(newTask) {
    let newTodos = todos.map((item) => {
      if (item.id === newTask.id) {
        return newTask;
      }
      return item;
    });
    setTodos(newTodos);
    setModal(false);
  }
  function handleCloseModal() {
    setModal(false);
  }
  return (
    <div className="App" style={{ textAlign: "center", margin: "20px auto" }}>
      <AddTodo handleTask={handleTask} />
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      {modal ? (
        <EditModal
          editTodo={editTodo}
          handleSaveTask={handleSaveTask}
          handleCloseModal={handleCloseModal}
        />
      ) : null}
    </div>
  );
}

export default App;
