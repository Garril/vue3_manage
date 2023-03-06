import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface GInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface GRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: GInterceptors<T>
  showLoading?: boolean
}
