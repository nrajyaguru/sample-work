import { initializeFeatureFlags } from './featureFlags';

const apiUrl = 'https://api.example.com/feature-flags';

initializeFeatureFlags(apiUrl).then(() => {
    console.log('Feature flags initialized');
    console.log('Is new Feature enabled?', isFeatureEnabled('newFeature'));
});