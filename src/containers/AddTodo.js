import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todo.action";

const AddTodo = ({ addTodo }) => {
  let input;
  const handleSubmit = (e) => {
    const value = input.value.trim();
    addTodo(value);
  };
  return (
    <div>
      <input type="text" ref={(node) => (input = node)} />
      <button type="submit" onClick={handleSubmit}>
        dodaj zadanie
      </button>
    </div>
  );
};
const mapDispatchTOProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text)),
});
export default connect(null, mapDispatchTOProps)(AddTodo);
