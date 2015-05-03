var handle = LaunchScreen.hold();

Template.appLayout.onRendered(function() {
	handle.release();
});