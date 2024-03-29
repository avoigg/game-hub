import axios, {AxiosRequestConfig} from 'axios';

export interface FetchResponse<T> {
    count: number;
    results: T[];
}
const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ed4a41dca70445a4ab29659e2495c3ef'
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then((res) => res.data);
    };

    post = (data: T) => {
        return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
    };
}

export default APIClient;