import * as Moment from "moment";

export default interface TodoProps {
  content: string;
  deadline: string;

  handleChageContent(e: any): void;
  handleChageDeadline(e: any): void;
}
