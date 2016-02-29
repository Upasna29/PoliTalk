Router.configure({
    layoutTemplate: 'layout',
});

Router.map(function(){
    this.route('home', {
        path: '/',
        // onBeforeAction: function(){
        //     if (Meteor.user() && !("firstame" in Meteor.user().profile)){ // First time logging in
        //         this.render('firstLogin');
        //     }
        //     else if (Meteor.user()) {
        //         this.render('newsCard');
        //     }
        //     else{
        //         this.render('notLoggedIn');
        //     }
        // }
    });
    this.route('editProfile', {path: '/edit_profile'});
    this.route('newsCard', {path: '/newsCard'});
    this.route('sideMenu', {path: '/sideMenu'})
});
