import { Space as AntdSpace, SpaceProps as AntdSpaceProps } from 'antd';
import React from 'react';

export interface SpaceProps extends AntdSpaceProps {}

const Space: React.FC<AntdSpaceProps> = (props: AntdSpaceProps) => <AntdSpace {...props} />;

export default Space;
