var admobid = {};

if( /(android)/i.test(navigator.userAgent) ) { // for android
    admobid = {
        banner: 'ca-app-pub-7757350290842737/5925298004', // or DFP format "/6253334/dfp_example_ad"
        interstitial: 'ca-app-pub-7757350290842737/2692630001'
    };
}

Meteor.startup(function () {
    if (Meteor.isCordova) {
        if (AdMob) {
            AdMob.createBanner( {
                adId: admobid.banner,
                position: AdMob.AD_POSITION.BOTTOM_CENTER,
                isTesting: true,
                autoShow: true,
                success: function() {
                    console.log("Received ad");
                },
                error: function() {
                    console.log("No ad received");
                }
            });
        } else {
            console.log("No Admob");
        }
    } else {
        console.log("No Cordova ");
    }
});