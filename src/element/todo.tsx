import * as React from 'react';
import * as ReactDOM from 'react-dom';
import IndexProps from './model/interface/indexProps';


const Todo: React.StatelessComponent<IndexProps> = props =>
  <div className="todo">
    <div>
      TODO: {props.content} | DeadLine: {props.deadline}<span>{props.pastTime}</span>
    </div>
  </div>

export default Todo;

