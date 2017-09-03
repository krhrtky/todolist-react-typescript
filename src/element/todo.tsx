import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Genre} from './model/interface/genre';
import {Weight} from './model/interface/weight';
import TodoProps from './model/interface/todoProps';


const Todo: React.StatelessComponent<TodoProps> = props =>
  <div className="todo">
    <div>
      TODO: {props.title} | DeadLine: {props.deadline} | {Genre[props.genre]} | {Weight[props.weight]}  <span>{props.pastTime}</span>
    </div>
  </div>

export default Todo;

