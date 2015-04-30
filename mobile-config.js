App.info({
    id: 'nl.werkaanjelijf.app',
    name: 'Werk aan je lijf.nl',
    description: 'Werk aan je lijf met de random fitness generator!',
    author: 'Patrick Langendoen en Marc-Jan Barnhoorn',
    email: 'webmaster@patricklangendoen.nl',
    website: 'http://www.werkaanjelijf.nl'
});

App.icons({
    'android_ldpi'  : 'images/icons/64x64Fitness-Hand-Grippers-icon.png',
    'android_mdpi'  : 'images/icons/72x72Fitness-Hand-Grippers-icon.png',
    'android_hdpi'  : 'images/icons/96x96Fitness-Hand-Grippers-icon.png',
    'android_xhdpi' : 'images/icons/128x128Fitness-Hand-Grippers-icon.png'
});

App.launchScreens({
//    'android': 'splash/Default~iphone.png'
});

// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);