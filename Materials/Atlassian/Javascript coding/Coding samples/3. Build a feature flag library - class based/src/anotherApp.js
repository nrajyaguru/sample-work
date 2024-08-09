import featureFlagService from "./CentralFeatureFlagService";

async function checkFeature() {
    const isEnabled = featureFlagService.isFeatureEnabled('betaFeature');
    console.log('Beta feature enabled:', isEnabled);
}

checkFeature();