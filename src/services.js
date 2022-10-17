import axios from 'axios';
import appProp from './application';

export const serviceCacheMap = new Map();

export const getMenuList = async (email) => {
    if (email !== undefined) {

        const response = await axios.get(appProp.service_base_url + '/getMenus?email=' + email);
        if (!serviceCacheMap.has('getMenuList')) {
            serviceCacheMap.set('getMenuList', response.data);
        }

        return serviceCacheMap.get('getMenuList');
    }
}

export const getTitleCardContactList = async (email) => {
    if (email !== undefined) {

        const response = await axios.get(appProp.service_base_url + '/getContacts?email=' + email);
        if (!serviceCacheMap.has('getTitleCardContactList')) {
            serviceCacheMap.set('getTitleCardContactList', response.data);
        }

        return serviceCacheMap.get('getTitleCardContactList');
    }
}

export const getTitleCardLinkList = async (email) => {
    if (email !== undefined) {

        const response = await axios.get(appProp.service_base_url + '/getLinks?email=' + email);
        if (!serviceCacheMap.has('getTitleCardLinkList')) {
            serviceCacheMap.set('getTitleCardLinkList', response.data);
        }

        return serviceCacheMap.get('getTitleCardLinkList');
    }
}

export const getTitleCardName = async (email) => {
    if (email !== undefined) {

        const response = await axios.get(appProp.service_base_url + '/getTitleCardInfo?email=' + email);
        if (!serviceCacheMap.has('getTitleCardName')) {
            serviceCacheMap.set('getTitleCardName', response.data);
        }

        return serviceCacheMap.get('getTitleCardName');
    }
}

export const getWorkingExps = async (email) => {
    if (email !== undefined) {

        const response = await axios.get(appProp.service_base_url + '/getWorkingExperiences?email=' + email);
        if (!serviceCacheMap.has('getWorkingExps')) {
            serviceCacheMap.set('getWorkingExps', response.data);
        }

        return serviceCacheMap.get('getWorkingExps');
    }
}