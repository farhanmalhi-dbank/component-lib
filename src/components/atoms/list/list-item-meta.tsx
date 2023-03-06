import React from 'react';
import { List } from 'antd';
import { ListItemMetaProps } from 'antd/lib/list';

export interface AntdListItemMetaProps extends ListItemMetaProps {}

const ListItemMeta: React.FC<AntdListItemMetaProps> = (props: AntdListItemMetaProps) => {
  return <List.Item.Meta {...props} />;
};

export default ListItemMeta;
