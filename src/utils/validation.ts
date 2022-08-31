import * as yup from 'yup';

enum ErrorMessageKeys {
  required = 'Field is requied.',
  min = 'Too short.',
  max = 'Too long',
}

export const stringRequired = yup.string().required(ErrorMessageKeys.required);

export const stringRequiredMinMax = yup
  .string()
  .required(ErrorMessageKeys.required)
  .min(2, ErrorMessageKeys.min)
  .max(32, ErrorMessageKeys.max);
