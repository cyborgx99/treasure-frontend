import { TextField } from '@mui/material';
import React from 'react';
import { FormTextFieldProps } from './types';
import { useFormFieldProps } from './useFormFieldProps';

const FormTextField = ({ name, ...otherProps }: FormTextFieldProps) => {
  const textFieldProps = useFormFieldProps(name);
  return <TextField data-cy-error={name} {...textFieldProps} {...otherProps} />;
};

export default FormTextField;
