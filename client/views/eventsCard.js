Template.eventsCard.helpers({
    formatTime: function(date){
        return moment(date).format('MM-DD-YYYY');
    },
});

Template.eventsCard.events({
    'click #register': function(e){
        var eventId = Events.findOne({description: this.description})._id;
        if (Meteor.user().profile.events.indexOf(eventId) != -1){
            alert('You are already registered for this event!');
        }
        else{
            Users.update(
                {_id: Meteor.userId()},
                {$addToSet: {'profile.events': eventId}},
            );
            alert('Thank you for registering for ' + this.host + "'s event!");
        }
    }
});
