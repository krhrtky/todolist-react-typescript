import * as Moment from "moment";
import TodoInterface from './interface/todoInterface';

export default class TodoState implements TodoInterface {
  public content: string;
  public deadline: string;
  public createDateTime: string;

  constructor(content: string, deadline: string) {
    this.content = content;
    this.deadline = deadline;
    this.createDateTime = Moment().format('LLL');
    }

  getContent() {
    return this.content;
  }
  getDeadline() {
    return this.deadline;
  }
  getCreateDateTime() {
    return this.createDateTime;
  };
}
