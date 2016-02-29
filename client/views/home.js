Template.home.helpers({
    firstTime: function(){
        if (Meteor.user() && ('profile' in Meteor.user())){
            return ("firstame" in Meteor.user().profile)
        }
        else{
            return true;
        }
    },
});
