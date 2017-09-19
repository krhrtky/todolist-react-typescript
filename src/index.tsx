import * as React from "react";
import * as ReactDOM from "react-dom";
import IndexState from "./element/model/interface/indexState";
import TodoModel from "./element/model/todoModel";
import Input from "./element/input";
import Select from "./element/select";
import Button from "./element/button";
import Todo from "./element/todo";
import { Genre } from "./element/model/interface/genre";
import { Weight } from "./element/model/interface/weight";

export default class Index extends React.Component<{}, IndexState> {
  constructor() {
    super();
    this.state = {
      todoList: [],
      sortBy: this.sortDate,
      selectedSort: true,
      deadlineAsc: true,
      genreAsc: true,
      weightAsc: true
    };

    // event handler
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleClickGenre = this.handleClickGenre.bind(this);
    this.handleClickWeight = this.handleClickWeight.bind(this);
    this.handleClickDeadline = this.handleClickDeadline.bind(this);
    this.sortDate = this.sortDate.bind(this);
    this.sortWeight = this.sortWeight.bind(this);
    this.sortGenre = this.sortGenre.bind(this);
    this.sortByCreateDateTime = this.sortByCreateDateTime.bind(this);
  }

  handleClickWeight(): void {
    this.setState({
      selectedSort: !this.state.weightAsc,
      weightAsc: !this.state.weightAsc,
      sortBy: this.sortWeight
    });
  }

  handleClickGenre(): void {
    this.setState({
      selectedSort: !this.state.genreAsc,
      genreAsc: !this.state.genreAsc,
      sortBy: this.sortGenre
    });
  }

  handleClickDeadline(): void {
    this.setState({
      selectedSort: !this.state.deadlineAsc,
      deadlineAsc: !this.state.deadlineAsc,
      sortBy: this.sortDate
    });
  }

  handleButtonClick(): any {
    const input: HTMLInputElement = ReactDOM.findDOMNode(
      this.refs.todo
    ) as HTMLInputElement;
    const title = (input.querySelector("#title") as HTMLInputElement).value;
    const deadline = (input.querySelector("#deadline") as HTMLInputElement)
      .value;
    const genre = (input.querySelector("#Genre") as HTMLSelectElement).value;
    const weight = (input.querySelector("#Weight") as HTMLSelectElement).value;

    if (!title.trim() || !deadline.trim()) return false;

    this.setState({
      todoList: this.state.todoList.concat(
        new TodoModel(
          title,
          deadline,
          (Genre as any)[genre],
          (Weight as any)[weight]
        )
      )
    });
  }

  sortMapper(selectedSort: boolean, callback: any): TodoModel[] {
    return !selectedSort
      ? this.state.todoList.sort(this.state.sortBy)
      : this.state.todoList.sort(this.state.sortBy).reverse();
  }

  renderTodoList(): JSX.Element[] {
    let i: number = 0;
    return this.sortMapper(
      this.state.selectedSort,
      this.state.sortBy
    ).map(todo => (
      <Todo
        key={i++}
        title={todo.getTitle()}
        deadline={todo.getDeadline()}
        genre={todo.getGenre()}
        weight={todo.getWeight()}
        pastTime={todo.getPastTime()}
        handleClickDeadline={this.handleClickDeadline}
        handleClickWeight={this.handleClickWeight}
        handleClickGenre={this.handleClickGenre}
      />
    ));
  }

  sortDate(a: TodoModel, b: TodoModel): number {
    const todoA = a.getDeadline().replace(/-/g, "");
    const todoB = b.getDeadline().replace(/-/g, "");

    if (todoA > todoB) return 1;
    if (todoA < todoB) return -1;

    return this.sortByCreateDateTime(a, b);
  }

  sortGenre(a: TodoModel, b: TodoModel): number {
    const todoA = a.getGenre();
    const todoB = b.getGenre();

    if (todoA > todoB) return 1;
    if (todoA < todoB) return -1;

    return this.sortDate(a, b);
  }

  sortWeight(a: TodoModel, b: TodoModel): number {
    const todoA = a.getWeight();
    const todoB = b.getWeight();

    if (todoA > todoB) return 1;
    if (todoA < todoB) return -1;

    return this.sortDate(a, b);
  }

  sortByCreateDateTime(a: TodoModel, b: TodoModel): number {
    const todoA = a.getCreateDateTime();
    const todoB = b.getCreateDateTime();

    if (todoA > todoB) return 1;
    if (todoA < todoB) return -1;

    return 0;
  }

  render(): JSX.Element {
    return (
      <div ref="todo">
        <div>
          <span id="input">
            <input type="text" id="title" placeholder="Input Todo" />
            <input type="date" id="deadline" placeholder="Input deadline" />
          </span>
          <Select id={"Genre"} obj={Genre} />
          <Select id={"Weight"} obj={Weight} />
        </div>
        <Button handleClick={this.handleButtonClick} />
        {this.renderTodoList()}
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
