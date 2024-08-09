import { fetchFeatureFlags } from './fetchFeatureFlags';
import { saveToCache, loadFromCache } from './cache';

export async function getFeatureFlags(apiUrl) {
    const cachedData = loadFromCache();

    if (cachedData) {
        return cachedData;
    }

    const data = await fetchFeatureFlags(apiUrl);
    if (data) {
        saveToCache(data);
    }
    return data;
}

export async function initializeFeatureFlags(apiUrl) {
    const featureFlags = await getFeatureFlags(apiUrl);
    window.featureFlags = featureFlags;
}

export function isFeatureEnabled(feature) {
    return window.featureFlags && window.featureFlags[feature];
}