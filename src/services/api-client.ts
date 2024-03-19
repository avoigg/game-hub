import axios from 'axios';

export interface FetchResponse<T> {
    count: number;
    results: T[];
}
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ed4a41dca70445a4ab29659e2495c3ef'
    }
})