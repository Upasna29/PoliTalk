Template.editProfile.onRendered (
   function() {
      $(document).ready(function() {
      $('select').material_select();
   });
});

Template.editProfile.events({
    'submit #profile': function(e){
        e.preventDefault();

        var issuesmenu = $(e.target).find('[name=issues]')[0];
        var issues = [];
        var options = issuesmenu.options;
        for (var i=0; i < options.length; i++){
            if (options[i].selected){
                issues.push(options[i].value);
            }
        }

        var candmenu = $(e.target).find('[name=candidates]')[0];
        var candidates = [];
        var options = candmenu.options;
        for (var i=0; i < options.length; i++){
            if (options[i].selected){
                candidates.push(options[i].value);
            }
        }

        var myprofile = {
            'firstname': $('#first_name').val(),
            'lastname':  $('#last_name').val(),
            'phone':     $('#icon_telephone').val(),
            'gender':    $("input[type='radio'][name='gender']:checked").val() || "",
            'notify':    $("input[type='radio'][name='receiveNotifications']:checked").val() || "",
            'issues':    issues,
            'candidates':candidates,
         };
        Users.update({_id:Meteor.userId()}, {$set:{
            'profile': myprofile,
        }});
        Router.go('newsFeed');
    }});
