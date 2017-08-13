import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TodoProps from "./model/todoProps";

const Input: React.StatelessComponent<TodoProps> = props =>
  <div id="input">
    <input type="text" placeholder="Input Todo" value={props.content} onChange={props.handleChageContent} />
    <input type="date" placeholder="Input deadline" value={props.deadline} onChange={props.handleChageDeadline} />
  </div>

export default Input;

