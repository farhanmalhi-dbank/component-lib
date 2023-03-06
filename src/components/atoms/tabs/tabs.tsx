import { Tabs as AntdTabs, TabsProps as AntdTabsProps } from 'antd';
import React from 'react';

export interface TabsProps extends AntdTabsProps {}

const Tabs: React.FC<AntdTabsProps> = (props: AntdTabsProps) => <AntdTabs {...props} />;

export default Tabs;
