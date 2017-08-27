import * as Moment from "moment";
import TodoInterface from './interface/todoInterface';
import { Genre } from "./interface/genre";
import { Weight } from "./interface/weight";

export default class TodoModel implements TodoInterface {
  public title: string;
  public deadline: string;
  public createDateTime: string;
  public genre: Genre;
  public weight: Weight;

  constructor(content: string, deadline: string) {
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
  getCreateDateTime(): string {
    return this.createDateTime;
  }
  getGenre(): Genre {
    return this.genre;
  }
  getWeight(): Weight {
    return this.weight;
  }
  getPastTime(): string {
    return Moment(this.getCreateDateTime()).fromNow();
    }
}
