import { Moment } from 'moment';

export default interface Todo {
  content: string;
  disc: string;
  createDateTime: Moment;
  updateDateTime: Moment;
}
