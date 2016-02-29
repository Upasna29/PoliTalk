Router.configure({
    layoutTemplate: 'layout',
});

Router.map(function(){
    this.route('home', {path: '/'});
    this.route('editProfile', {path: '/edit_profile'});
    this.route('newsCard', {path: '/newsCard'});
    this.route('sideMenu', {path: '/sideMenu'});
    this.route('aboutUs', {path: '/aboutUs'});
});
