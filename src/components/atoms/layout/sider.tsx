import React from 'react';
import { Layout, SiderProps } from 'antd';

const { Sider } = Layout;

const AntdSider: React.FC<SiderProps> = (props: SiderProps) => {
  return <Sider {...props} />;
};
export default AntdSider;
