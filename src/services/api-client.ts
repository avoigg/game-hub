import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ed4a41dca70445a4ab29659e2495c3ef'
    }
})