import React from "react";
import Todo from "../components/Todo";
import { connect } from "react-redux";
import { toggleTodo } from "../actions/todo.action";
import { AVAILABLE_FILTERS } from "../actions/todo.action";

const TodoList = ({ todos, toggleTodo }) => {
  return (
    //<div>{JSON.stringify(todos)}</div>//;
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
      ))}
    </ul>
  );
};

const filterTodos = (todos, filter) => {
  switch (filter) {
    case AVAILABLE_FILTERS.SHOW_COMPLETE:
      return todos.filter((todo) => todo.complete === true);
    case AVAILABLE_FILTERS.SHOW_ACTIVE:
      return todos.filter((todo) => todo.complete === false);

    default:
      return todos;
  }
};
const mapStateToProps = (state) => ({
  todos: filterTodos(state.todos, state.filter),
});
const mapDispatchToProps = {
  toggleTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
