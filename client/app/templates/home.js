Template.appHome.rendered = function () {
    $(document).ready(_initHomepage);
}

function _initHomepage() {
    if (typeof AdMob !== 'undefined') {
        AdMob.showBanner();
    }

    alert(ExerciseCollection.find({}).count());
}