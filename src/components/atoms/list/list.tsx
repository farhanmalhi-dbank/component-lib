import React from 'react';
import { List as AntdList, ListProps as AntdListProps } from 'antd';

type ListProps<T> = T;

function List<T>(props: AntdListProps<ListProps<T>>) {
  return <AntdList {...props} />;
}

export default List;
