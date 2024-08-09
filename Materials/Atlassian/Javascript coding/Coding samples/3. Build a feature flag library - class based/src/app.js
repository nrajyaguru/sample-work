import featureFlagService from "./CentralFeatureFlagService";

async function initialize() {
    const featureFlags = await featureFlagService.debouncedGetFeatureFlags();
    console.log('Feature Flags', featureFlags);
    console.log('Is newFeature enabled?', featureFlagService.isFeatureEnabled('newFeature'));
}

initialize();