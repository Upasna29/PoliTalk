Router.configure({
    layoutTemplate: 'layout',
});

Router.map(function(){
    this.route('home', {path: '/'});
    this.route('editProfile', {path: '/edit_profile'});
    this.route('aboutUs', {path: '/about_us'});
    this.route('publishedProfile', {
        path: '/profile',
        data: function(){
            return Meteor.user().profile;
        }
    });
    this.route('events', {path: '/events'});    this.route('notYetImplemented', {path: '/oops'});
    this.route('contactForm', {path: "/contact"});
    this.route('registrationConfirmation', {path: "/registered"});
    this.route('getInvolved', {path: "/get_involved"});
});
