import { Row as AntdRow, RowProps as AntdRowProps } from 'antd';
import React from 'react';

const Row: React.FC<AntdRowProps> = (props: AntdRowProps) => <AntdRow {...props} />;

export default Row;
