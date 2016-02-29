Template.header.onRendered (
    function() {
        $(".button-collapse").sideNav();
    }
);


Template.header.helpers({
    notFirstTime: function(){
        if (Meteor.user() && ('profile' in Meteor.user())){
            return !("firstame" in Meteor.user().profile)
        }
        else{
            return false;
        }
    }
});
