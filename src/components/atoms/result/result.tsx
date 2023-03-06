import { Result as AntdResult, ResultProps as AntdResultProps } from 'antd';
import React from 'react';

const Result: React.FC<AntdResultProps> = (props: AntdResultProps) => {
  return <AntdResult {...props} />;
};
export default Result;
