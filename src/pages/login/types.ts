import { SchemaOf } from 'yup';

export enum LoginFormNames {
  name = 'name',
}

export interface LoginFormProps {
  error?: string;
  initialValues: LoginFormValues;
  onSubmit: (values: LoginFormValues) => void;
  validationSchema: LoginValidationSchemaType;
  isLoading: boolean;
}

export interface LoginFormValues {
  name: string;
}

export type LoginValidationSchemaType = SchemaOf<LoginFormValues>;
