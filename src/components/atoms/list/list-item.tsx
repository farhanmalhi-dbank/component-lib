import React from 'react';
import { List } from 'antd';
import { ListItemProps } from 'antd/lib/list';

export interface AntdListItemProps extends ListItemProps {}

const ListItem: React.FC<AntdListItemProps> = (props: AntdListItemProps) => {
  return <List.Item {...props} />;
};
export default ListItem;
