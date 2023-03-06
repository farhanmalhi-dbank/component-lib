import { Form as AntdForm, FormProps as AntdFormProps } from 'antd';
import React from 'react';
export interface IFormProps extends AntdFormProps {
  children?: React.ReactNode;
}
const Form: React.FC<IFormProps> = (props: IFormProps) => <AntdForm {...props}>{props.children}</AntdForm>;

export default Form;
