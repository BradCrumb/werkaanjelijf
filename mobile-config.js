App.info({
    id: 'nl.werkaanjelijf.app',
    name: 'Werk aan je lijf.nl',
    description: 'Werk aan je lijf met de random fitness generator!',
    author: 'Patrick Langendoen en Marc-Jan Barnhoorn',
    email: 'webmaster@patricklangendoen.nl',
    website: 'http://www.werkaanjelijf.nl'
});

App.icons({
    'android_ldpi'  : 'public/images/icons/64x64Fitness-Hand-Grippers-icon.png',
    'android_mdpi'  : 'public/images/icons/72x72Fitness-Hand-Grippers-icon.png',
    'android_hdpi'  : 'public/images/icons/96x96Fitness-Hand-Grippers-icon.png',
    'android_xhdpi' : 'public/images/icons/128x128Fitness-Hand-Grippers-icon.png'
});

App.launchScreens({
    // Android
  'android_ldpi_portrait': 'public/images/launch-screens/test.jpg',
  'android_ldpi_landscape': 'public/images/launch-screens/test.jpg',
  'android_mdpi_portrait': 'public/images/launch-screens/test.jpg',
  'android_mdpi_landscape': 'public/images/launch-screens/test.jpg',
  'android_hdpi_portrait': 'public/images/launch-screens/test.jpg',
  'android_hdpi_landscape': 'public/images/launch-screens/test.jpg',
  'android_xhdpi_portrait': 'public/images/launch-screens/test.jpg',
  'android_xhdpi_landscape': 'public/images/launch-screens/test.jpg'
});

// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);

