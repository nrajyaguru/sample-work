const SAMPLE_FEATURES = {
    show_dialog_box: true,
    enable_new_pricing: true
}

const Cache = {
    featureFlags: {

    },
    timeStamp: null
};

const MAX_CACHE_TTL = 300;
let fetchInstance = null;


function fetchAllFeatures() {
    console.log('call to BEs');
    return new Promise((resolve) => {
        setTimeout(() => resolve(SAMPLE_FEATURES), 100);
    });
}

function getFeatureState(featureName, defaultValue) {
    const isCacheDataPresent = Object.keys(Cache.featureFlags).length;
    const isCachedDataFresh = Date.now() - Cache.timeStamp < MAX_CACHE_TTL;

    if (isCacheDataPresent && isCachedDataFresh) {
        console.log('returning from cache', featureName);
        const value = Object.prototype.hasOwnProperty.call(Cache.featureFlags, featureName)
            ? Cache.featureFlags[featureName]
            : defaultValue;

        return Promise.resolve(value);
    }

    if (fetchInstance instanceof Promise) {
        return fetchInstance
            .then((featureFlags) => {
                console.log('From promise callback', featureName, featureFlags);
                return Cache?.featureFlags?.[featureName]
                    ?? defaultValue;
            })
            .catch(() => console.error)
    }

    // write your solution here
    fetchInstance = fetchAllFeatures()
        .then((featureFlags) => {
            Cache.featureFlags = featureFlags;
            Cache.timeStamp = Date.now();


            return Object.prototype.hasOwnProperty.call(featureFlags, featureName)
                ? featureFlags[featureName]
                : defaultValue;
        })
        .catch(error => console.error)
        .finally(() => { fetchInstance = null })


    return fetchInstance;
}

getFeatureState('show_dialog_box', false).then(function (isEnabled) {
    if (isEnabled) {
        console.log('show_dialog_box enabled');
    } else {
        console.log('show_dialog_box disabled');
    }
});

getFeatureState('show_pricing_v2', false).then(function (isEnabled) {
    if (isEnabled) {
        console.log('show_pricing_v2 enabled');
    } else {
        console.log('show_pricing_v2 disabled');
    }
});

getFeatureState('show_editor', false).then(function (isEnabled) {
    if (isEnabled) {
        console.log('show_editor enabled');
    } else {
        console.log('show_editor disabled');
    }
});


setTimeout(() => {
    getFeatureState('enable_new_pricing', false).then(function (isEnabled) {
        if (isEnabled) {
            console.log('enable_new_pricing enabled');
        } else {
            console.log('enable_new_pricing disabled');
        }
    });

}, 300);


setTimeout(() => {
    getFeatureState('enable_new_pricing', false).then(function (isEnabled) {
        if (isEnabled) {
            console.log('enable_new_pricing enabled');
        } else {
            console.log('enable_new_pricing disabled');
        }
    });
    getFeatureState('enable_new_pricing_v2', false).then(function (isEnabled) {
        if (isEnabled) {
            console.log('enable_new_pricing_v2 enabled');
        } else {
            console.log('enable_new_pricing_v2 disabled');
        }
    });
    getFeatureState('enable_new_pricing', false).then(function (isEnabled) {
        if (isEnabled) {
            console.log('enable_new_pricing enabled');
        } else {
            console.log('enable_new_pricing disabled');
        }
    });

}, 400);