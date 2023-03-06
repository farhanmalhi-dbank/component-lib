import React from 'react';
import { Input as AntdInput, InputProps as AntdInputProps } from 'antd';

const Input: React.FC<AntdInputProps> = (props: AntdInputProps) => {
  return <AntdInput {...props} />;
};
export default Input;
