  import TodoModel from "../todoModel";

export default interface IndexState {
  todoList: TodoModel[];
  sortBy: ( (a: TodoModel, b: TodoModel) => number );
  selectedSort: boolean;
  deadlineAsc: boolean;
  genreAsc: boolean;
  weightAsc: boolean;
}


