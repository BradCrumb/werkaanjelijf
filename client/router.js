Router.configure({
    layoutTemplate: 'appLayout'
});

Router.map(function() {
    this.route('app.home', {
        path: '/',
        layoutTemplate: 'appLayout'
    });
    this.route('cms.home', {
        path: '/cms',
        layoutTemplate: 'cmsLayout'
    });
});