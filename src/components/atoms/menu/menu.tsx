import React from 'react';
import { Menu as AntdMenu, MenuProps } from 'antd';

const Menu: React.FC<MenuProps> = (props: MenuProps) => {
  return <AntdMenu {...props} />;
};
export default Menu;
