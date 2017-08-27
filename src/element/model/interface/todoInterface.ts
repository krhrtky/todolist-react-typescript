import { Genre } from './genre';
import { Weight } from './weight';


export default interface TodoInterface {
  title: string;
  deadline: string;
  createDateTime: string;
  genre: Genre;
  weight: Weight;
}
