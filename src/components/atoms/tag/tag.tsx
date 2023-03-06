import { Tag as AntdTag, TagProps as AntdTagProps } from 'antd';
import React from 'react';

export interface TagProps extends AntdTagProps {}

const Tag: React.FC<AntdTagProps> = (props: AntdTagProps) => <AntdTag {...props} />;
export default Tag;
