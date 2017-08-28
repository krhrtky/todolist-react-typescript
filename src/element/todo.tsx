import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TodoProps from './model/interface/todoProps';


const Todo: React.StatelessComponent<TodoProps> = props =>
  <div className="todo">
    <div>
      TODO: {props.title} | DeadLine: {props.deadline} {props.genre}{props.weight}<span>{props.pastTime}</span>
    </div>
  </div>

export default Todo;

