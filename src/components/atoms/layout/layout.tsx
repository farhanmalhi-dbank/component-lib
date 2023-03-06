import React from 'react';
import { Layout as AntdLayout, LayoutProps } from 'antd';

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  return <AntdLayout {...props} />;
};
export default Layout;
