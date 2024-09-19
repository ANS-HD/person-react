import React from 'react';
import { Component } from './styled';

type Props = {
  height: number;
};

const Index: React.FC<Props> = (props) => {
  return <Component height={props.height} />;
};

export default Index;
