import { AxiosError } from 'axios';

export type ErrorWithMessage = {
  message: string;
};

export const isAxiosErrorWithResponse = (
  error: unknown
): error is AxiosError<{ message: string }> => {
  return (error as AxiosError).isAxiosError;
};

function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
  if (isAxiosErrorWithResponse(maybeError) && maybeError.response?.data) {
    return { message: maybeError.response.data.message };
  }

  if (maybeError instanceof Error) {
    return { message: maybeError.message };
  }

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    return new Error(String(maybeError));
  }
}

export function getErrorMessage(error: unknown) {
  return toErrorWithMessage(error);
}
