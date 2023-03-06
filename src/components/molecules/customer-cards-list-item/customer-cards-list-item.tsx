import React from 'react';

import ListItem, { AntdListItemProps } from '../../atoms/list/list-item';
import CustomerCardListItemMeta from '../customer-cards-list-item-meta/customer-cards-list-item-meta';

interface Props extends AntdListItemProps {
  name: string;
  value: string;
  type: 'link' | 'text';
  link?: string;
}

const CustomerCardListItem: React.FC<Props> = (props: Props) => {
  return (
    <ListItem key={props.name}>
      <CustomerCardListItemMeta {...props} />
    </ListItem>
  );
};
export default CustomerCardListItem;
