import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { HttpClient, HttpConfig } from './types';
import { getErrorMessage } from 'utils/errorUtils';

class HttpService implements HttpClient {
  private constructor() {}

  private static instance: HttpService;

  public static getHttpService(): HttpService {
    if (!HttpService.instance) {
      HttpService.instance = new HttpService();
    }
    return HttpService.instance;
  }

  private apiClient: AxiosInstance = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_SERVER_URL,
    headers: {
      'Content-type': 'application/json',
    },
  });

  public get = async <T>(url: string, config?: HttpConfig) => {
    return this.apiClient
      .get<T>(url, config)
      .then((result) => result.data)
      .catch((error) => {
        throw getErrorMessage(error);
      });
  };

  public delete = async <T>(url: string, config?: HttpConfig) => {
    return this.apiClient
      .delete<T>(url, config)
      .then((result) => result.data)
      .catch((error) => {
        throw getErrorMessage(error);
      });
  };

  public post = async <T, D>(url: string, data?: D, config?: HttpConfig) => {
    return this.apiClient
      .post<D, AxiosResponse<T>>(url, data, config)
      .then((result) => result.data)
      .catch((error) => {
        throw getErrorMessage(error);
      });
  };

  public put = async <T, D>(url: string, data: D, config?: HttpConfig) => {
    return this.apiClient
      .put<D, AxiosResponse<T>>(url, data, config)
      .then((result) => result.data)
      .catch((error) => {
        throw getErrorMessage(error);
      });
  };

  public patch = async <T, D>(url: string, data: D, config?: HttpConfig) => {
    return this.apiClient
      .patch<D, AxiosResponse<T>>(url, data, config)
      .then((result) => result.data)
      .catch((error) => {
        throw getErrorMessage(error);
      });
  };
}

export const httpService = HttpService.getHttpService();
