import * as React from 'react';
import * as ReactDOM from 'react-dom';
import IndexProps from './element/model/interface/indexProps';
import IndexState from './element/model/interface/indexState';
import TodoProps from './element/model/todoProps';
import TodoState from './element/model/todoState';
import Input from './element/input';
import Button from './element/button';
import Todo from './element/todo';

export default class Index extends React.Component<IndexProps, IndexState> {
  constructor(props: IndexProps) {
    super();
    this.state = {
      content: '',
      deadline: '',
      todoList: [],
    }

    this.handleChageContent = this.handleChageContent.bind(this);
    this.handleChageDeadline = this.handleChageDeadline.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChageContent(e: any): void {
    this.setState({
      content: e.target.value,

    })
  };

  handleChageDeadline(e: any): void {
    this.setState({
      deadline: e.target.value,

    })
  };

  handleClick(): void {
    this.setState({
      content: '',
      deadline: '',
      todoList: this.state.todoList.concat(new TodoState(this.state.content, this.state.deadline)),
    })
  }

  renderTodoList(): any {
    let i: number = 0;
     return this.state.todoList.sort(this.sortDate).map(todo =>
       <Todo key={i++} content={todo.getContent()} deadline={todo.getDeadline()} />
      )
  }

  sortDate(a: TodoState, b: TodoState): number {

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
      <div>
        <Input
          content={this.state.content}
          deadline={this.state.deadline}
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
  <Index content="" deadline="" />,
  document.getElementById('root')
  );

