import { Card as AntdCard, CardProps as AntdCardProps } from 'antd';
import React from 'react';

const Card: React.FC<AntdCardProps> = (props: AntdCardProps) => <AntdCard {...props} />;

export default Card;
