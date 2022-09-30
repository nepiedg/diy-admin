import axios from "axios";
import type {AxiosRequestConfig, AxiosResponse} from 'axios';
import {ElMessage, ElMessageBox} from 'element-plus';
import {getToken, clearToken} from '@/utils/auth';

export interface HttpResponse<T = unknown> {
    msg: string;
    code: number;
    data: T;
}
axios.defaults.baseURL = 'payss/';
// axios.defaults.baseURL = "http://tk.0635.com/video/";

axios.defaults.timeout = 5000;

// 请求拦截
axios.interceptors.request.use((config: AxiosRequestConfig) => {
        const token = getToken();
        if (token) {
            if (!config.headers) {
                config.headers = {};
            }
            config.headers.token = token;
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    }
);
// 响应拦截
axios.interceptors.response.use((response: AxiosResponse<HttpResponse>) => {
    const res = response.data;
    if (res.code !== 1) {
        ElMessage.error(res.msg);
        // `token` 过期或者账号已在别处登录
        if (res.code === 401) {
            clearToken(); // 清除浏览器全部临时缓存
            window.location.href = '/'; // 去登录页
            ElMessageBox.alert('你已被登出，请重新登录', '提示', {});
        }
        return Promise.reject(new Error(res.msg || 'Error'));
    } else {
        return response.data;
    }

}, (error) => {
    // 对响应错误做点什么
    if (error.message.indexOf('timeout') != -1) {
        ElMessage.error('网络超时');
    } else if (error.message == 'Network Error') {
        ElMessage.error('网络连接错误');
    } else {
        ElMessage.error(error.message || 'Request Error');
    }
    return Promise.reject(error);
});