import axios from 'axios';
 
// 设置基本URL地址
const baseUrl = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8090/platform'; //根据开发环境配置不同的API URL

function request(method, url, data) {
    return new Promise((resolve, reject) => {
        const config = {
            method: method,
            url: `${baseUrl}${url}`,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
            data: JSON.stringify(data),
        };
        
        axios(config).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        });
    });
}

export default {
    get(url, params) {
        return request('get', url, params);
    },
    
    post(url, data) {
        return request('post', url, data);
    },
    
    put(url, data) {
        return request('put', url, data);
    },
    
    delete(url, params) {
        return request('delete', url, params);
    }
};





































// // 创建axios实例
// const apiClient = axios.create({
//     baseURL: baseUrl,
// });
 
// export default {
//     get(url) {
//         return apiClient.get(url);
//     },
//     post(url, data) {
//         return apiClient.post(url, data);
//     },
// };