var handle = LaunchScreen.hold();

Template.cmsLayout.onRendered(function() {
	handle.release();
});