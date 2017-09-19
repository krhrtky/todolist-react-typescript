import * as React from 'react';
import * as ReactDOM from 'react-dom';
import InputTodoProps from "./model/inputTodoProps";

const Input: React.StatelessComponent<void> = () =>
  <span id="input">
    <input type="text" id="title" placeholder="Input Todo" />
    <input type="date" id="deadline" placeholder="Input deadline" />
  </span>

export default Input;

