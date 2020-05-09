import React from "react";
import TodoList from "./containers/TodoList";
import AddTodo from "./containers/AddTodo";
import Footer from "./containers/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
