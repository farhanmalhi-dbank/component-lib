import React from 'react';
import ListItemMeta, { AntdListItemMetaProps } from '../../atoms/list/list-item-meta';
import { Text } from '../../atoms/typography';

export interface Props extends AntdListItemMetaProps {
  name: string;
  value: string;
  type: 'link' | 'text';
  link?: string;
}

const CustomerCardListItemMeta: React.FC<Props> = (props: Props) => {
  const linkOrText = (type: 'link' | 'text', value: string, link?: string) => {
    if (type === 'link') {
      return <a href={link}>View</a>;
    } else if (type === 'text') {
      return <Text>{value}</Text>;
    }
  };

  return (
    <>
      <ListItemMeta {...props} title={<Text ellipsis={{ tooltip: props.name }}>{props.name}</Text>} />
      {linkOrText(props.type, props.value, props.link)}
    </>
  );
};

export default CustomerCardListItemMeta;
