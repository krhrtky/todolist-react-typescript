import *  as React from 'react';
import * as ReactDOM from 'react-dom';
import IndexState from './element/model/interface/indexState';
import TodoModel from './element/model/todoModel';
import Input from './element/input';
import Button from './element/button';
import Todo from './element/todo';

export default class Index extends React.Component<{}, IndexState> {
  constructor() {
    super();
    this.state = {
      todoList: [],
    }

    // event handler
    this.handleChageContent = this.handleChageContent.bind(this);
    this.handleChageDeadline = this.handleChageDeadline.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  handleChageContent(e: Event ): void {
    const target: HTMLInputElement = e.target as HTMLInputElement;
  };

  handleChageDeadline(e: Event): void {
    const target: HTMLInputElement = e.target as HTMLInputElement;
  };

  handleClick(): any {
    const input: Element = ReactDOM.findDOMNode(this.refs.todo);
    console.log((input.querySelector('#content') as HTMLInputElement).value);

    this.setState({
      todoList: this.state.todoList.concat(new TodoModel('', '')),
    })
  }

  renderTodoList(): any[] {
    let i: number = 0;
     return this.state.todoList.sort(this.sortDate).map(todo =>
       <Todo
        key={i++}
        content={todo.getTitle()}
        deadline={todo.getDeadline()}
        pastTime={todo.getPastTime()}
       />
     )
  }

  sortDate(a: TodoModel, b: TodoModel): number {

  const genreA = a.getDeadline();
  const genreB = b.getDeadline();

  let comparison = 0;
  if (genreA > genreB) {
    comparison = 1;
  } else if (genreA < genreB) {
    comparison = -1;
  }
  return comparison;
}

  render() {
    return (
      <div ref="todo">
        <Input
          handleChageContent={this.handleChageContent}
          handleChageDeadline={this.handleChageDeadline}
        / >
        <Button handleClick={this.handleClick} />
        {this.renderTodoList()}
      </div>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
  );

