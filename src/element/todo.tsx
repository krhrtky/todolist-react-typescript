import * as React from 'react';
import * as ReactDOM from 'react-dom';
import IndexProps from './model/interface/indexProps';


const Todo: React.StatelessComponent<IndexProps> = props =>
  <div className="todo">
    <p>TODO: {props.content}, DeadLine: {props.deadline}</p>
    <span>{props.pastTime}</span>
  </div>

export default Todo;

