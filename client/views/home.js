Template.home.helpers({
    notLoggedIn: function(){return !Meteor.user()},
    firstTime: function(){return (Meteor.user() && ("firstame" in Meteor.user().profile))},
    notFirstTime: function(){return (Meteor.user() && !("firstame" in Meteor.user().profile))},
});
