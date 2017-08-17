import * as Moment from "moment";
import TodoInterface from './interface/todoInterface';

Moment.locale('ja');

export default class TodoState implements TodoInterface {
  public content: string;
  public deadline: string;
  public createDateTime: string;

  constructor(content: string, deadline: string) {
    this.content = content;
    this.deadline = deadline;
    this.createDateTime = Moment().toISOString();

    }

  getContent(): string {
    return this.content;
  }
  getDeadline(): string {
    return this.deadline;
  }
  getCreateDateTime(): string {
    return this.createDateTime;
  };
  getPastTime(): string {
    return Moment(this.getCreateDateTime()).fromNow();
    }
}
