import * as Moment from "moment";
import TodoInterface from './interface/todoInterface';
import { Genre } from "./interface/genre";
import { Weight } from "./interface/weight";

export default class TodoModel implements TodoInterface {
  public title: string;
  public deadline: string;
  public genre: Genre;
  public weight: Weight;
  public createDateTime: string;

  constructor(content: string, deadline: string, genre: Genre, weight: Weight) {
    this.title = content;
    this.deadline = deadline;
    this.createDateTime = Moment().toISOString();

    }

  getTitle(): string {
    return this.title;
  }
  getDeadline(): string {
    return this.deadline;
  }
  getGenre(): Genre {
    return this.genre;
  }
  getWeight(): Weight {
    return this.weight;
  }
  getCreateDateTime(): string {
    return this.createDateTime;
  }
  getPastTime(): string {
    return Moment(this.getCreateDateTime()).fromNow();
  }
}
