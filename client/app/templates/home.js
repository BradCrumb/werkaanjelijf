if (Meteor.isClient) {

}

Template.appHome.rendered = function () {
    $(document).ready(_initHomepage);
};

Template.appHome.helpers({
    amount: function() {
        return ExerciseCollection.find({}).count();
    }
});

function _initHomepage() {
    if (typeof AdMob !== 'undefined') {
        AdMob.showBanner();
    }
}