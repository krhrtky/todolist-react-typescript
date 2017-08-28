import * as React from 'react';
import * as ReactDOM from 'react-dom';
import InputTodoProps from "./model/inputTodoProps";

const Input: React.StatelessComponent<InputTodoProps> = props =>
  <div id="input">
    <input type="text" id="title" placeholder="Input Todo" onChange={props.handleChageContent} />
    <input type="date" id="deadline" placeholder="Input deadline" onChange={props.handleChageDeadline} />
  </div>

export default Input;

