import React from 'react';
import { RecyclerResultType } from 'src/context/RecyclerMainPage';

export default function Recycler(props: RecyclerResultType) {
  return <div>{props.company}</div>;
}
