import React, { useEffect, useState } from 'react';
import { Layout as AntdLayout, Menu } from 'antd';
import Icon from '../components/atoms/icon/icon';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import HeaderComponent from './header/header-component';
import { MenuProps } from 'rc-menu';
import t from '../utils/translation/t';

const { Sider, Content } = AntdLayout;

const Layout = () => {
  const location = useLocation();
  let navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState(location.pathname);
  useEffect(() => {
    setCurrent(location.pathname);
  }, [location]);
  const navigationHandler: MenuProps['onClick'] = (e) => {
    navigate(e.key);
    setCurrent(e.key);
  };
  return (
    <AntdLayout>
      <Sider trigger={null} collapsible collapsed={collapsed} className="ant-layout-sider-light" style={{ position: 'sticky' }}>
        <div className={`${collapsed ? 'logo-collapsed' : 'logo'}`}>
          <Icon name="d-char" className="d-char" />
          {!collapsed && <Icon name="bank-char" className="bank-char" />}
        </div>

        <Menu
          theme="light"
          mode="inline"
          onClick={navigationHandler}
          selectedKeys={[current]}
          items={[
            {
              key: '/',
              icon: <Icon name="dashboard-filled" />,
              label: t('sideBar.dashboard')
            },
            {
              key: '/configurations',
              icon: <Icon name="setting-filled" />,
              label: t('sideBar.configurations')
            }
          ]}
        />
      </Sider>
      <AntdLayout className="site-layout">
        <HeaderComponent collapsed={collapsed} collapseHandler={setCollapsed} />
        <Content className="container">
          <Outlet />
        </Content>
      </AntdLayout>
    </AntdLayout>
  );
};

export default Layout;
