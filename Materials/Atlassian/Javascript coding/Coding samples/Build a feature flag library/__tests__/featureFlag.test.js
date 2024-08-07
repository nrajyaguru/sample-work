const FeatureFlag = require('../src/featureFlag');

test('flags is empty', ()=> {
    const featureFlag = new FeatureFlag();
    expect(Object.keys(featureFlag.flags).length).toBe(0);
});