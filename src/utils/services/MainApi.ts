import { AxiosRequestConfig } from 'axios';
import HttpClient from './HttpClient';

const url = process.env.REACT_APP_MOVIE_DATABASE_API
  ? process.env.REACT_APP_MOVIE_DATABASE_API
  : '';

class MainApi extends HttpClient {
  public constructor() {
    super(url);
    this._initializeRequestInterceptor();
  }

  private _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(
      this._handleRequest,
      this._handleError
    );
  };

  private _handleRequest = (config: AxiosRequestConfig) => {
    const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
    if (config.headers) {
      config.headers['Authorization'] = `Bearer ${ACCESS_TOKEN}`;
    }

    return config;
  };
}

export default MainApi;
