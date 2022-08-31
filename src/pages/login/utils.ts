import { stringRequiredMinMax } from 'utils/validation';
import * as yup from 'yup';
import {
  LoginFormValues,
  LoginValidationSchemaType,
  LoginFormNames,
} from './types';

export const loginFormValues: LoginFormValues = {
  [LoginFormNames.name]: '',
};

export const loginValidationSchema: LoginValidationSchemaType = yup.object({
  name: stringRequiredMinMax,
});
