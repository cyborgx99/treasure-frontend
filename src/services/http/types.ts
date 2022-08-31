export interface HttpConfig {
  url?: string;
  headers?: Record<string, string>;
  withError?: boolean;
  withCredentials?: boolean;
}
export interface HttpClient {
  get<R>(url: string, config?: HttpConfig): Promise<R>;
  post<R, D>(url: string, data: D, config?: HttpConfig): Promise<R>;
  put<R, D>(url: string, data: D, config?: HttpConfig): Promise<R>;
  patch<R, D>(url: string, data: D, config?: HttpConfig): Promise<R>;
  delete<R>(url: string, config?: HttpConfig): Promise<R>;
}
