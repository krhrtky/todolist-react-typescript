import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface HandelClickInterface {
  handleClick(e: any): void;
}

const Button: React.StatelessComponent<HandelClickInterface> = props =>
  <button onClick={props.handleClick}>Send</button>

export default Button;
