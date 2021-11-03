/* 接口 */
import axios from "axios";
import {limitTimeRange} from "element-ui";
// let baseUrl = '/api';
let baseUrl = 'http://localhost:8082';

// 获取指定id的用户
export const getUserById = params => {
    return axios.get(`${baseUrl}/users/` + params)
}
// 分页获取所有的数据
export const getUsers = (start, pageSize) => {
    let params = {
        start: start,
        pageSize: pageSize
    }
    return axios.get(`${baseUrl}/users/` ,{params : params})
}
// 新增用户
export const saveUser = params => {
    console.log(params)
    return axios.post(`${baseUrl}/users/`, params)
}
// 更新用户所有的信息
export const updateUser = params => {
    return axios.put(`${baseUrl}/users/`, params)
}
// 更新用户部分信息
export const updatePartOfUser = params => {
    return axios.patch(`${baseUrl}/users/`, params)
}