Router.configure({
    layoutTemplate: 'layout',
});

Router.map(function(){
    this.route('home', {path: '/'});
    this.route('editProfile', {path: '/edit_profile'});
    this.route('aboutUs', {path: '/about_us'});
    this.route('publishedProfile', {path: '/profile'});
    this.route('events', {path: '/events'});    this.route('notYetImplemented', {path: '/oops'});
    this.route('contactForm', {path: "/contact"});
    this.route('getInvolved', {path: "/get_involved"});
});
