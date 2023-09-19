import React from 'react';
import { RecyclerResultType } from 'src/context/RecyclerMainPage';
import './Recycler.css';

export default function Recycler(props: RecyclerResultType) {
  return <div className="recycler">{props.company}</div>;
}
