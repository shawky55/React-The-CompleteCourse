import React from 'react';
import Ancestor from './Ancestor';
const Demo = (props) => {
  console.log('SONS');
  return <Ancestor> {props.showText?"My name is Jhon":''}</Ancestor>;
};

export default React.memo(Demo);
