Template.registeredEventsSection.helpers({
    myEvents: function(){
        return Events.find({_id: {$in: Meteor.user().profile.events} });
    },
});
