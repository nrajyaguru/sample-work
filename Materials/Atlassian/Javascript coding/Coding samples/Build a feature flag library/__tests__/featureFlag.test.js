const FeatureFlag = require('../src/featureFlag');

test('flags is empty', () => {
    const featureFlag = new FeatureFlag();
    expect(Object.keys(featureFlag.flags).length).toBe(0);
});

test('enableFeature should enable a feature flag', () => {
    const featureFlag = new FeatureFlag();
    featureFlag.enableFeature('newFeature');
    expect(featureFlag.isFeatureEnabled('newFeature')).toBe(true);
});

test('disableFeature should disable a feature flag', () => {
    const featureFlag = new FeatureFlag();
    featureFlag.enableFeature('newFeature');
    featureFlag.disableFeature('newFeature');
    expect(featureFlag.isFeatureEnabled('newFeature')).toBeFalsy();
});

test('isFeatureEnable should return false for undefined features', () => {
    const featureFlag = new FeatureFlag();
    expect(featureFlag.isFeatureEnabled('undefinedFeature')).toBeFalsy();
});

test('enableFeatuer with condition should enable feature based on condition', () => {
    const featureFlag = new FeatureFlag();
    featureFlag.enableFeature('newFeature', user => user.role === 'admin');
    const adminUser = { role: 'admin' };
    const normalUser = { role: 'user' };
    expect(featureFlag.isFeatureEnabled('newFeature', adminUser)).toBeTruthy();
    expect(featureFlag.isFeatureEnabled('newFeature', normalUser)).toBeFalsy();
});

test('isFeatureEnabled should return false if condition is not met', () => { 
    const featureFlag = new FeatureFlag();
    featureFlag.enableFeature('newFeature', user => user.role === 'admin');
    const normalUser = { role: 'user' };
    expect(featureFlag.isFeatureEnabled('newFeature', normalUser)).toBe(false);
})