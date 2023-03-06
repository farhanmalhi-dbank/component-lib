import React from 'react';
import { Layout, SiderProps } from 'antd';

const { Content } = Layout;

const AntdContent: React.FC<any> = (props: SiderProps) => {
  return <Content {...props} />;
};
export default AntdContent;
