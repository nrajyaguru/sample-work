class FeatureFlag {
    constructor() {
        this.flags = {}
    }

    enableFeature(feature, condition = null) {
        this.flags[feature] = { enabled: true, condition };
    }

    disableFeature(feature) {
        this.flags[feature] = { enabled: false, condition: null };
    }

    isFeatureEnabled(feature, context = null) {
        const flag = this.flags[feature];
        if (!flag) return false;
        if (flag.condition) {
            return flag.condition(context);
        }
        return flag.enabled;
    }
}

module.exports = FeatureFlag;