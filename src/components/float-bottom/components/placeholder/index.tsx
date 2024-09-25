import React from 'react';

type Props = {
  height: number;
};

const Index: React.FC<Props> = (props) => {
  return <div style={{ height: `${props.height}px`, background: 'transparent'}} />;
};

export default Index;
