import React from 'react';
import Input from '../../atoms/input/input';
import FormItem from '../../atoms/form/form-item';

interface InputWithTextProps {
  isEditing: boolean;
  placeholder?: string;
  label: string;
  name: string;
  customClass?: string;
}

const InputWithText = ({ customClass = '', isEditing = false, name, placeholder = '', label }: InputWithTextProps) => {
  return (
    <FormItem label={label} labelCol={{ span: 24 }} name={name} className={customClass}>
      <Input placeholder={placeholder} disabled={isEditing === false} className="input-with-text" />
    </FormItem>
  );
};

export default InputWithText;
