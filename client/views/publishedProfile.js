Template.publishedProfile.onRendered (
    function() {
        $(document).ready(function() {
        });
    }
);

Template.publishedProfile.events({
    'submit #profilepub': function(e){
        console.log('yo')
        e.preventDefault();
        Router.go('editProfile');
    }
});
