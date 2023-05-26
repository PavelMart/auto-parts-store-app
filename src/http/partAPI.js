import {$authHost, $host} from './index';
import jwt_decode from 'jwt-decode';

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type);
    return data;
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', type);
    return data;
}

export const createPart = async (part) => {
    const {data} = await $authHost.post('api/part', type);
    return data;
}


export const fetchTypes = async () => {
    const {data} = await $host.get('api/type');
    return data;
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand');
    return data;
}

export const fetchParts = async () => {
    const {data} = await $host.get('api/part');
    return data;
}

export const fetchOnePart = async (id) => {
    const {data} = await $host.get(`api/part/${id}`);
    return data;
}

export const check = async () => {
    const {data} = await $authHost.post('api/user/auth');
    localStorage.setItem('token', data.token);    
    return jwt_decode(data.token);
}
