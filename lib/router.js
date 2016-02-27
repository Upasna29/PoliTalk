Router.configure({
    layoutTemplate: 'layout',
});

Router.map(function(){
    this.route('home', {path: '/'});
    this.route('newsFeed', {path: '/newsfeed'});
    this.route('editProfile', {path: '/edit_profile'});
});
