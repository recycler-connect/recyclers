import React from 'react';
import { RecyclerResultType } from 'src/context/RecyclerMainPage';
import './Recycler.css';

export default function Recycler(props: RecyclerResultType) {
  return (
    <div className="recycler">
      <a href={props.acc_circ_url} rel="noreferrer" target="_blank">
        <h3>{props.company}</h3>
        <p>{props.location}</p>
        <p>{props.acc_circ_url}</p>
      </a>
    </div>
  );
}
