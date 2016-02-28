Router.configure({
    layoutTemplate: 'layout',
});

Router.map(function(){
    this.route('newsFeed', {
        path: '/newsFeed',
        // action: function(){
        //     if (Meteor.user() && !("firstName" in Meteor.user())){ // First time logging in
        //         this.render('firstLogin');
        //     }
        //     else{
        //         this.render('notLoggedIn');
        //     }
        // }
    });
    this.route('editProfile', {path: '/edit_profile'});
    this.route('newsCard', {path: '/newsCard'});
});
