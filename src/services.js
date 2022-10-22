import axios from 'axios';
import appProp from './application';

export const serviceCacheMap = new Map();

export const getMenuList = async (email) => {
    if (email !== undefined) {

        if (!serviceCacheMap.has('getMenuList')) {
            const response = await axios.get(appProp.service_base_url + '/getMenus?email=' + email);
            serviceCacheMap.set('getMenuList', response.data);
        }

        return serviceCacheMap.get('getMenuList');
    }
}

export const getTitleCardContactList = async (email) => {
    if (email !== undefined) {

        if (!serviceCacheMap.has('getTitleCardContactList')) {
            const response = await axios.get(appProp.service_base_url + '/getContacts?email=' + email);
            serviceCacheMap.set('getTitleCardContactList', response.data);
        }

        return serviceCacheMap.get('getTitleCardContactList');
    }
}

export const getTitleCardLinkList = async (email) => {
    if (email !== undefined) {

        if (!serviceCacheMap.has('getTitleCardLinkList')) {
            const response = await axios.get(appProp.service_base_url + '/getLinks?email=' + email);
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

        if (!serviceCacheMap.has('getWorkingExps')) {
            const response = await axios.get(appProp.service_base_url + '/getWorkingExperiences?email=' + email);
            serviceCacheMap.set('getWorkingExps', response.data);
        }

        return serviceCacheMap.get('getWorkingExps');
    }
}


export const getQualification = async (email) => {
    if (email !== undefined) {

        if (!serviceCacheMap.has('getQualification')) {
            const response = await axios.get(appProp.service_base_url + '/getQualification?email=' + email);
            serviceCacheMap.set('getQualification', response.data);
        }

        return serviceCacheMap.get('getQualification');
    }
}

export const getSkills = async (email) => {
    if (email !== undefined) {

        if (!serviceCacheMap.has('getSkills')) {
            const response = await axios.get(appProp.service_base_url + '/getSkills?email=' + email);
            serviceCacheMap.set('getSkills', response.data);
        }

        return serviceCacheMap.get('getSkills');
    }
}

export const getAchievements = async (email) => {
    if (email !== undefined) {

        if (!serviceCacheMap.has('getAchievements')) {
            const response = await axios.get(appProp.service_base_url + '/getAchievements?email=' + email);
            serviceCacheMap.set('getAchievements', response.data);
        }

        return serviceCacheMap.get('getAchievements');
    }
}

export const getAboutCandidate = async (email) => {
    if (email !== undefined) {

        if (!serviceCacheMap.has('getAboutCandidate')) {
            const response = await axios.get(appProp.service_base_url + '/getAboutCandidate?email=' + email);
            serviceCacheMap.set('getAboutCandidate', response.data);
        }

        return serviceCacheMap.get('getAboutCandidate');
    }
}