import { CACHE_KEY, CACHE_EXPIRY_KEY, CACHE_DURATION } from './constants';

export function saveToCache(data) {
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
    localStorage.setItem(CACHE_EXPIRY_KEY, Date.now() + CACHE_DURATION);
}

export function loadFromCache() {
    const expiry = localStorage.getItem(CACHE_EXPIRY_KEY);

    if (expiry && Date.now() > expiry) {
        localStorage.removeItem(CACHE_KEY);
        localStorage.removeItem(CACHE_EXPIRY_KEY);
        return null;
    }

    const cachedData = localStorage.getItem(CACHE_KEY);
    return cachedData ? JSON.parse(cachedData) : null;
}

