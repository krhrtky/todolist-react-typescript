import * as React from 'react';
import {Genre} from './model/interface/genre';
import {Weight} from './model/interface/weight';

const createOption: any = (en: any) => {
  const enumVal = Object.keys(en).filter(en => !Number.isNaN(parseInt(en)));

  return (
    enumVal.map(e => <option key={e} value={en[e]}>{en[e]}</option>)
  );
};


const Select: React.StatelessComponent<any> = props =>
  <select id={props.id}>
     {createOption(props.obj)}
  </select>
export default Select;

