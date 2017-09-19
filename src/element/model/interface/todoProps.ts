import { Genre } from './genre';
import { Weight } from './weight';
import TodoInterface from "./todoInterface";


export default interface TodoProps extends TodoInterface  {
  title: string;
  deadline: string;
  genre: Genre;
  weight: Weight;
	pastTime: String;
  handleClickDeadline(e: any): void;
  handleClickGenre(e: any): void;
  handleClickWeight(e: any): void;
}
