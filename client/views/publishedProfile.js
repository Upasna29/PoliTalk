Template.publishedProfile.onRendered (
    function() {
        $(document).ready(function() {
        });
    }
);

Template.publishedProfile.helpers({
    issuesParse: function(){return this.issues;},
    candidatesParse: function(){return this.candidates}
});

Template.publishedProfile.events({
    'submit #profilepub': function(e){
        //console.log('yo')
        e.preventDefault();
        Router.go('notYetImplemented');
    }
});
