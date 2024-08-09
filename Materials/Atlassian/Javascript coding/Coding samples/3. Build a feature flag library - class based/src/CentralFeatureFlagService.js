class CentralFeatureFlagService {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
        this.cache = {};
        this.cacheExpiry = 360000; //an hour
        this.lastFetchTime = 0;
        this.debounceTimeout = 500;
        this.socket = new WebSocket('wss://api.example.com/feature-flags');
        this.socket.onmessage = (event) => {
            this.cache = {
                data: JSON.parse(event.data),
                timestamp: Date.now()
            };
        };
    }

    async fetchFeatureFlags() {
        try {
            const response = await fetch(this.apiUrl);

            if (!response.ok) {
                throw new Error('Netowrk response was not ok');
            }
            const data = await response.json();
            this.cache = {
                data,
                timestamp: Date.now()
            };

            return data;
        } catch (error) {
            console.error('Failed to fetch feature flags:', error);
            return null;
        }
    }

    async debouncedGetFeatureFlags(delay = 500) {
        clearTimeout(this.debounceTimeout);
        this.debounceTimeout = setTimeout(() => {
        }, delay);
        await this.getFeatureFlags();
    }

    async getFeatureFlags() {
        if (Date.now() - this.lastFetchTime > this.cacheExpiry) {
            this.lastFetchTime = Date.now();
            return this.fetchFeatureFlags();
        }
        return this.cache.data;
    }

    isFeatureEnabled(feature) {
        const flags = this.cache.data || {};
        return flags[feature] || false;
    }
}

const featureFlagService = new CentralFeatureFlagService('https://api.example.com/feature-flags');
export default featureFlagService;