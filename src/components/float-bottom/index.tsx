import React, { useState } from 'react';
import { Bottom, Placeholder } from './components';
import { Component } from './styled';

type Props = {
  style?: React.CSSProperties;
  onOffsetHeightChange?: (height: number) => void;
  isFixed?: boolean;
  children: React.ReactNode;
};

const defaultStyle = {
  padding: '0 16px',
  backgroundColor: '#ffffff',
};

const Index: React.FC<Props> = (props) => {
  const [height, setHeight] = useState<number>(0);

  const onOffsetHeightChange = (v: number) => {
    props.onOffsetHeightChange?.(v);
    setHeight(v);
  };

  return (
    <Component>
      <Placeholder height={height} />
      <Bottom
        isFixed={props.isFixed}
        onOffsetHeightChange={onOffsetHeightChange}
        style={props.style ?? defaultStyle}
      >
        {props.children}
      </Bottom>
    </Component>
  );
};

export default Index;
