import React from 'react';
import { RecyclerResultType } from 'src/context/RecyclerMainPage';
import './Recycler.css';

export default function Recycler(props: RecyclerResultType) {
  return (
    <div className="recycler">
      <h3>{props.company}</h3>
      <p>{props.location}</p>
      <p>URL placeholder</p>
    </div>
  );
}
