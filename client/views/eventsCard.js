Template.eventsCard.helpers({
    formatTime: function(date){
        return moment(date).format('MM-DD-YYYY');
    },
});

Template.eventsCard.events({
    'click #register': function(e){
        var eventId = Events.findOne({description: this.description})._id;
        Users.update(
            {_id: Meteor.userId()},
            {$addToSet: {'profile.events': eventId}}
        );
    }
});
