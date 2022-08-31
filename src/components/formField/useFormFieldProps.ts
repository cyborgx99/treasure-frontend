import { OutlinedTextFieldProps, TextFieldProps } from '@mui/material';
import { useField } from 'formik';

export const useFormFieldProps = (name: string): OutlinedTextFieldProps => {
  const [field, { error, touched }] = useField(name);
  const hasError = touched && Boolean(error);

  const textFieldProps: TextFieldProps = {
    variant: 'outlined',
    fullWidth: true,
    error: hasError,
    helperText: error,
    ...field,
  };

  return textFieldProps;
};
